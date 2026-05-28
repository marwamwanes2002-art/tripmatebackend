const router = require("express").Router();
const { 
    createBookingCtrl, 
    getUserBookingsCtrl 
} = require("../controllers/bookingController");
const { verifyToken } = require("../middlewares/verifyToken"); // تأكدي من مسار ملف الـ Middleware عندك

// /api/bookings
router.route("/")
    .post(verifyToken, createBookingCtrl); // حجز جديد (يحتاج توكن)

// /api/bookings/my-bookings
router.route("/my-bookings")
    .get(verifyToken, getUserBookingsCtrl); // جلب حجوزات المستخدم الحالي (يحتاج توكن)

module.exports = router;