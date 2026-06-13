const asyncHandler = require("express-async-handler");
const { User, validateChangePassword } = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

/**
 * @desc    Send Forgot Password Link (To Email)
 * @route   /api/password/forgot-password
 * @method  POST
 * @access  public
 */
module.exports.sendForgotPasswordLink = asyncHandler(async (req, res) => {
    // 1. البحث عن المستخدم للتأكد من وجوده
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(404).json({ message: "البريد الإلكتروني غير مسجل لدينا" });
    }

    // 2. إنشاء توكن فريد يحتوي على كلمة المرور القديمة كجزء من السر
    const secret = process.env.JWT_SECRET + user.password;
    const token = jwt.sign({ email: user.email, id: user._id }, secret, { expiresIn: "10m" });
    
    // 3. الرابط الذي سيتم إرساله
    const link = `http://localhost:8000/api/password/reset-password/${user._id}/${token}`;

    // 4. إعدادات إرسال الإيميل باستخدام المتغيرات الصحيحة
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.USER_EMAIL, // تم التعديل هنا
            pass: process.env.USER_PASS,  // تم التعديل هنا
        },
    });

    const mailOptions = {
        from: process.env.USER_EMAIL, // تم التعديل والإكمال هنا
        to: user.email,
        subject: "إعادة تعيين كلمة المرور - TripMate",
        html: `<div>
                <h4>يرجى الضغط على الرابط أدناه لإعادة تعيين كلمة مرورك</h4>
                <p><a href="${link}">${link}</a></p>
                <small>هذا الرابط صالح لمدة 10 دقائق فقط</small>
              </div>`,
    };

    // 5. تنفيذ عملية الإرسال
    transporter.sendMail(mailOptions, function (error, success) {
        if (error) {
            console.log(error);
            return res.status(500).json({ message: "فشل في إرسال البريد الإلكتروني، حاول لاحقاً" });
        } else {
            res.status(200).json({ message: "تم إرسال رابط إعادة التعيين إلى بريدك الإلكتروني" });
        }
    });
});

/**
 * @desc    Reset The Password (Final Step)
 * @route   /api/password/reset-password/:userId/:token
 * @method  POST
 * @access  public
 */
module.exports.resetThePassword = asyncHandler(async (req, res) => {
    // 1. التحقق من البيانات المدخلة
    const { error } = validateChangePassword(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    // 2. البحث عن المستخدم
    const user = await User.findById(req.params.userId);
    if (!user) {
        return res.status(404).json({ message: "مستخدم غير موجود" });
    }

    // 3. تأكيد تطابق الإيميل
    if (user.email !== req.body.email) {
        return res.status(400).json({ message: "البريد الإلكتروني المدخل لا يتطابق مع صاحب هذا الرابط" });
    }

    // 4. التحقق من صحة التوكن
    const secret = process.env.JWT_SECRET + user.password;
    try {
        jwt.verify(req.params.token, secret);

        // 5. تشفير وحفظ كلمة المرور الجديدة
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(req.body.password, salt);
        await user.save();
        
        res.status(200).json({ message: "تم تحديث كلمة المرور بنجاح" });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: "الرابط غير صالح أو انتهت صلاحيته" });
    }
});