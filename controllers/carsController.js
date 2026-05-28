const { Car, validateCreateCar, validateUpdateCar } = require("../models/Car");
const { Booking } = require("../models/Booking");

/**
 * @desc    جلب جميع السيارات أو الفلترة حسب التوفر
 * @route   GET /api/cars
 * @access  public
 */
const getAllCarsCtrl = async (req, res) => {
    try {
        const { pickupDate, dropoffDate, location } = req.query;

        // 1. إذا لم يرسل المستخدم تواريخ البحث، نرجع كل السيارات في قاعدة البيانات ببساطة
        if (!pickupDate || !dropoffDate || !location) {
            const cars = await Car.find();
            return res.status(200).json(cars);
        }

        // 2. تحويل النصوص إلى تواريخ برمجية
        const start = new Date(pickupDate);
        const end = new Date(dropoffDate);

        // 3. جلب معرفات السيارات المشغولة في هذه الفترة
        // 🔥 التعديل 2 & 3 & 4: مطابقة أسماء الحقول مع الـ Schema الفعلي للحجوزات
        const unavailableBookings = await Booking.find({
            bookingType: "car", // نبحث فقط في حجوزات السيارات
            status: { $ne: 'cancelled' },
            checkInDate: { $lte: end },   // الحقل الفعلي في الـ Schema هو checkInDate
            checkOutDate: { $gte: start }  // الحقل الفعلي في الـ Schema هو checkOutDate
        }).select('serviceId'); // الحقل الفعلي في الـ Schema هو serviceId وليس carId

        // 🔥 التعديل 5: استخراج الـ serviceId بدلاً من carId
        const unavailableCarIds = unavailableBookings.map(b => b.serviceId);

        // 4. جلب السيارات المتاحة المطابقة للموقع
        const availableCars = await Car.find({
            pickupLocation: location,
            _id: { $nin: unavailableCarIds }
        });

        // 5. حساب عدد الأيام والسعر الإجمالي بشكل مختصر وسريع
        const totalDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

        const carsWithPrice = availableCars.map(car => {
            return {
                ...car._doc,
                totalDays,
                totalPrice: totalDays * car.dailyPrice
            };
        });

        // 6. إرسال النتيجة
        return res.status(200).json(carsWithPrice);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

/**
 * @desc    إضافة سيارة جديدة
 */
const createCarCtrl = async (req, res) => {
    try {
        const { error } = validateCreateCar(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const newCar = new Car(req.body);
        const savedCar = await newCar.save();

        return res.status(201).json(savedCar);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

/**
 * @desc    جلب تفاصيل سيارة واحدة بواسطة الـ ID
 */
const getSingleCarCtrl = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ message: "عذراً، السيارة غير موجودة." });
        }
        return res.status(200).json(car);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

/**
 * @desc    تعديل بيانات سيارة قائمة
 */
const updateCarCtrl = async (req, res) => {
    try {
        const { error } = validateUpdateCar(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const updatedCar = await Car.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        if (!updatedCar) {
            return res.status(404).json({ message: "لم يتم العثور على السيارة لتعديلها." });
        }

        return res.status(200).json(updatedCar);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

/**
 * @desc    حذف سيارة نهائياً
 */
const deleteCarCtrl = async (req, res) => {
    try {
        const car = await Car.findByIdAndDelete(req.params.id);
        if (!car) {
            return res.status(404).json({ message: "لم يتم العثور على السيارة، قد تكون محذوفة بالفعل." });
        }
        return res.status(200).json({ message: "تم حذف السيارة بنجاح من النظام." });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllCarsCtrl,
    createCarCtrl,
    getSingleCarCtrl,
    updateCarCtrl,
    deleteCarCtrl
};