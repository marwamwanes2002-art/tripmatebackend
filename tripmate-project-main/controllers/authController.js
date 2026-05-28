const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const { 
    User, 
    validateRegisterUser, 
    validateRegisterDriver, // استدعاء دالة فحص السائق الجديدة 
    validateLoginUser, 
    validateChangePassword 
} = require("../models/User");

/**
 * @desc    Register New User (Passenger or Driver)
 * @route   /api/auth/register
 * @method  POST
 * @access  public
 */
const registerUser = asyncHandler(async (req, res) => {
    // 1. فحص هل الحساب المطلوب تسجيله هو سائق أم راكب عادي
    const isDriver = req.body.role === "driver";
    
    // 2. تشغيل دالة التحقق المناسبة بناءً على نوع الحساب
    const { error } = isDriver ? validateRegisterDriver(req.body) : validateRegisterUser(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    // 3. التأكد من عدم تكرار الإيميل
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).json({ message: "this user already registered" });
    }

    // 4. تشفير كلمة المرور
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // 5. تجهيز البيانات الأساسية المشتركة
    const userData = {
        email: req.body.email,
        fullName: req.body.fullName,
        password: hashedPassword,
        phoneNumber: req.body.phoneNumber,
        profilePic: req.body.profilePic
    };

    // 6. إذا كان الحساب سائق، نقوم بحقن البيانات الخاصة به وتفعيل جاهزيته فوراً للتجربة
    if (isDriver) {
        userData.role = "driver";
        userData.driverInfo = {
            vehicleModel: req.body.vehicleModel,
            plateNumber: req.body.plateNumber,
            isAvailable: true // نجعله أونلاين مباشرة بعد التسجيل لتسهيل فحص الرادار الجغرافي
        };
    }

    // 7. حفظ المستخدم في قاعدة البيانات
    user = new User(userData);
    const result = await user.save();
    const token = user.generateToken(); 

    const { password, ...other } = result._doc;
    res.status(201).json({ ...other, token });
});

/**
 * @desc    Login User
 * @route   /api/auth/login
 * @method  POST
 * @access  public
 */
const loginUser = asyncHandler(async (req, res) => {
    const { error } = validateLoginUser(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json({ message: "invalid email or password" });
    }

    const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordMatch) {
        return res.status(400).json({ message: "invalid email or password" });
    }

    const token = user.generateToken(); 
    const { password: pass, ...otherDetails } = user._doc;
    res.status(200).json({ ...otherDetails, token });
});

/**
 * @desc    Change Password (تغيير كلمة المرور من داخل الحساب)
 * @route   /api/auth/change-password
 * @method  POST
 * @access  private
 */
const changePassword = asyncHandler(async (req, res) => {
    const { error } = validateChangePassword(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(404).json({ message: "المستخدم غير موجود" });
    }

    const isPasswordMatch = await bcrypt.compare(req.body.oldPassword, user.password);
    if (!isPasswordMatch) {
        return res.status(400).json({ message: "كلمة المرور القديمة غير صحيحة" });
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.newPassword, salt);
    await user.save();

    res.status(200).json({ message: "تم تحديث كلمة المرور بنجاح" });
});

module.exports = {
    registerUser,
    loginUser,
    changePassword
};