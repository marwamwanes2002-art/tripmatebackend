const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const { User, validateUpdateUser } = require("../models/User");

/**
 * @desc    Update User (تحديث الملف الشخصي مع الصورة)
 * @route   /api/users/:id
 * @method  PUT
 * @access  private
 */
const updateUser = asyncHandler(async (req, res) => {
    // 1. التحقق من صحة البيانات
    const { error } = validateUpdateUser(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    // 2. تشفير كلمة السر في حال تم إرسالها
    if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    // 3. معالجة الصورة الشخصية
    // إذا كان هناك ملف مرفوع (req.file)، نأخذ اسمه الجديد، وإلا نبقي الصورة القديمة كما هي
    let profilePic = req.body.profilePic;
    if (req.file) {
        profilePic = req.file.filename; 
    }

    // 4. تحديث المستخدم في قاعدة البيانات بجميع الحقول الجديدة
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set: {
            fullName: req.body.fullName,
            phoneNumber: req.body.phoneNumber,
            profilePic: profilePic, // المسار الجديد للصورة
            fatherName: req.body.fatherName,
            motherName: req.body.motherName,
            idPassportNumber: req.body.idPassportNumber,
        }
    }, { new: true }).select("-password");

    if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
});

/**
 * @desc    Get All Users
 * @route   /api/users
 * @method  GET
 * @access  private (Admin)
 */
const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find().select("-password");
    res.status(200).json(users);
});

/**
 * @desc    Get User By Id
 * @route   /api/users/:id
 * @method  GET
 * @access  private
 */
const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select("-password");
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: "user not found" });
    }
});

/**
 * @desc    Delete User
 * @route   /api/users/:id
 * @method  DELETE
 * @access  private
 */
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "user has been deleted successfully" });
    } else {
        res.status(404).json({ message: "user not found" });
    }
});

/**
 * @desc    Update Driver Location (تحديث موقع السائق السريع كل 10 ثوانٍ)
 * @route   PUT /api/users/update-location
 * @method  PUT
 * @access  private (فقط السائق المسجل)
 */
const updateDriverLocation = asyncHandler(async (req, res) => {
    const { longitude, latitude } = req.body;

    // التأكد من أن الإحداثيات تم إرسالها بالطلب
    if (longitude === undefined || latitude === undefined) {
        return res.status(400).json({ message: "يجب إرسال خطوط الطول longitude والعرض latitude" });
    }

    // تحديث حقل الموقع الجغرافي داخل السائق مباشرة
    const updatedDriver = await User.findByIdAndUpdate(
        req.user.id, // جلب معرف السائق بأمان من الـ Token عبر حارس التحقق
        {
            $set: {
                "driverInfo.currentLocation": {
                    type: "Point",
                    coordinates: [longitude, latitude] // الترتيب: خط الطول أولاً ثم العرض
                }
            }
        },
        { new: true }
    ).select("-password");

    if (!updatedDriver) {
        return res.status(404).json({ message: "لم يتم العثور على حساب السائق" });
    }

    res.status(200).json({
        message: "تم تحديث موقع الكابتن بنجاح",
        currentLocation: updatedDriver.driverInfo.currentLocation
    });
});

module.exports = {
    updateUser,
    getAllUsers,
    getUserById,
    deleteUser,
    updateDriverLocation // <--- تصدير الدالة الجديدة بنجاح
};