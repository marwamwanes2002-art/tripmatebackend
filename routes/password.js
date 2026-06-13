const express = require("express");
// تأكدي من استيراد الدوال التي سنستخدمها فقط
const { 
    sendForgotPasswordLink, 
    resetThePassword 
} = require("../controllers/passwordController");
const router = express.Router();

// المسار: /api/password/forgot-password
// هذا المسار يستدعيه الموبايل لإرسال الإيميل
router.route("/forgot-password")
    .post(sendForgotPasswordLink);

// المسار: /api/password/reset-password/:userId/:token
// هذا المسار يستدعيه الموبايل لتحديث كلمة المرور فعلياً
router.route("/reset-password/:userId/:token")
    .post(resetThePassword);

module.exports = router;