const express = require("express");
const router = express.Router();
const { createReview, getReviews, deleteReview } = require("../controllers/reviewController");
const { verifyToken } = require("../middlewares/verifyToken"); // استدعاء الميديليوير الأساسي تبعك

// المسار الرئيسي: /api/reviews
router.route("/")
    .post(verifyToken, createReview)
    .get(getReviews);

// المسار مع الـ ID: /api/reviews/:id
router.route("/:id")
    .delete(verifyToken, deleteReview); // حمايتها بـ verifyToken والتحقق بصير جوا الـ Controller

module.exports = router;