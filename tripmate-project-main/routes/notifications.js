const express = require("express");
const router = express.Router();
const { getUserNotifications, markAsRead } = require("../controllers/notificationController");
const { verifyToken } = require("../middlewares/verifyToken"); // تأكدي من اسم ملف التحقق عندك

// المسار الأساسي: /api/notifications
router.get("/", verifyToken, getUserNotifications);

// مسار تحديث حالة الإشعار (مقروء): /api/notifications/:id
router.put("/:id", verifyToken, markAsRead);

module.exports = router;