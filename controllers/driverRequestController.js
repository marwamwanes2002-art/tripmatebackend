const { DriverRequest, validateCreateRequest } = require("../models/DriverRequest");
const { User } = require("../models/User");

/**
 * @desc    1. إنشاء طلب رحلة جديد والبحث عن أقرب سائق
 * @route   /api/driver-requests
 * @method  POST
 * @access  private (فقط الراكب المسجل)
 */
const createRideRequest = async (req, res) => {
    try {
        // A. فحص البيانات القادمة من الموبايل باستخدام حارس الأمن Joi
        const { error } = validateCreateRequest(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        // B. إنشاء تذكرة الرحلة وحفظها في قاعدة البيانات بحالة الانتظار pending
        const newRequest = new DriverRequest({
            passenger: req.user.id, // نأخذ رقم الراكب تلقائياً من التوكن (verifyToken)
            pickupLocation: req.body.pickupLocation,
            dropoffLocation: req.body.dropoffLocation,
            fare: req.body.fare,
            distance: req.body.distance,
            duration: req.body.duration,
            status: "pending"
        });

        const savedRequest = await newRequest.save();

        // C. تشغيل الرادار! البحث عن أقرب السائقين المتاحين على بعد 3 كم (3000 متر)
        const passengerLng = req.body.pickupLocation.coordinates[0];
        const passengerLat = req.body.pickupLocation.coordinates[1];

        const nearbyDrivers = await User.find({
            role: "driver",
            "driverInfo.isAvailable": true, // يكون السائق فاتح شغل
            "driverInfo.currentLocation": {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [passengerLng, passengerLat] // موقع الراكب الحالي
                    },
                    $maxDistance: 3000 // المسافة بالمتر (3 كيلومتر)
                }
            }
        });

        // D. إعادة الجواب للموبايل ومعه قائمة السائقين القريبين لإرسال إشعارات لهم
        res.status(201).json({
            message: "تم إنشاء طلب الرحلة بنجاح، جاري البحث عن كابتن...",
            request: savedRequest,
            availableDriversNearby: nearbyDrivers.length // عدد السائقين القريبين المحيطين به
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "حدث خطأ في السيرفر أثناء طلب الرحلة" });
    }
};

/**
 * @desc    2. موافقة السائق على الطلب (قبول الرحلة)
 * @route   /api/driver-requests/:id/accept
 * @method  PUT
 * @access  private (فقط السائق المسجل)
 */
const acceptRideRequest = async (req, res) => {
    try {
        // A. التأكد من أن الحساب الذي يحاول القبول هو سائق فعلاً
        if (req.user.role !== "driver") {
            return res.status(403).json({ message: "عذراً، هذا الإجراء مخصص للكباتن فقط!" });
        }

        // B. البحث عن الرحلة المطلوبة في قاعدة البيانات
        const ride = await DriverRequest.findById(req.params.id);
        if (!ride) {
            return res.status(404).json({ message: "عذراً، هذه الرحلة غير موجودة" });
        }

        // C. التأكد من أن الرحلة ما زالت متاحة ولم يأخذها سائق آخر
        if (ride.status !== "pending") {
            return res.status(400).json({ message: "للأسف، تم قبول هذه الرحلة أو إلغاؤها من قبل مستخدم آخر" });
        }

        // D. ربط السائق بالرحلة وتحديث حالتها إلى "مقبولة"
        ride.driver = req.user.id; // رقم السائق من التوكن
        ride.status = "accepted";
        await ride.save();

        // E. تعديل حالة السائق إلى "غير متاح" مؤقتاً لكي لا تظهر له طلبات أخرى وهو يقود
        await User.findByIdAndUpdate(req.user.id, {
            "driverInfo.isAvailable": false
        });

        res.status(200).json({
            message: "تم قبول الرحلة بنجاح! الكابتن في طريقه إليك الآن.",
            ride
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "حدث خطأ في السيرفر أثناء قبول الرحلة" });
    }
};
/**
 * @desc    3. إنهاء الرحلة بنجاح وإعادة الكابتن متاحاً
 * @route   /api/driver-requests/:id/complete
 * @method  PUT
 * @access  private (فقط السائق الذي يقود الرحلة حالياً)
 */
const completeRideRequest = async (req, res) => {
    try {
        // A. التأكد من أن الحساب هو سائق فعلاً
        if (req.user.role !== "driver") {
            return res.status(403).json({ message: "عذراً، هذا الإجراء مخصص للكباتن فقط!" });
        }

        // B. البحث عن الرحلة في قاعدة البيانات
        const ride = await DriverRequest.findById(req.params.id);
        if (!ride) {
            return res.status(404).json({ message: "عذراً، هذه الرحلة غير موجودة" });
        }

        // C. التأكد من أن هذا السائق هو نفسه صاحب الرحلة المربوط بها
        if (ride.driver && ride.driver.toString() !== req.user.id) {
            return res.status(403).json({ message: "عذراً، لا يمكنك إنهاء رحلة لكابتن آخر!" });
        }

        // D. التأكد من أن الرحلة لم تنتهِ مسبقاً
        if (ride.status !== "accepted") {
            return res.status(400).json({ message: "لا يمكن إنهاء هذه الرحلة لأنها ليست في الحالة المقبولة حالياً" });
        }

        // E. تحويل حالة الرحلة إلى مكتملة "completed"
        ride.status = "completed";
        await ride.save();

        // F. إعادة حالة الكابتن إلى "متاح" (true) ليستقبل طلبات جديدة في الشارع
        await User.findByIdAndUpdate(req.user.id, {
            "driverInfo.isAvailable": true
        });

        res.status(200).json({
            message: "تم إنهاء الرحلة بنجاح! يعطيك العافية كابتن، تم حساب الفاتورة وأنت متاح الآن لطلبات جديدة.",
            ride
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "حدث خطأ في السيرفر أثناء إنهاء الرحلة" });
    }
};
module.exports = {
    createRideRequest,
    acceptRideRequest,
    completeRideRequest 
};