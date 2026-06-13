const router = require("express").Router();
const { createRideRequest, acceptRideRequest, completeRideRequest } = require("../controllers/driverRequestController");
const { verifyToken } = require("../middlewares/verifyToken");
// المسار الأول: لطلب رحلة جديدة (خاص بالراكب)
// POST -> /api/driver-requests
router.post("/", verifyToken, createRideRequest);

// المسار الثاني: لقبول الرحلة (خاص بالسائق)
// PUT -> /api/driver-requests/:id/accept
router.put("/:id/accept", verifyToken, acceptRideRequest);
// الرابط الجديد لإنهاء الرحلة
router.put("/:id/complete", verifyToken, completeRideRequest);

module.exports = router;