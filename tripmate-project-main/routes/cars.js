const express = require("express");
const router = express.Router();

// استدعاء الدوال (Controllers) التي تتحكم بمنطق السيارات
const { 
    createCarCtrl, 
    getAllCarsCtrl,
    getSingleCarCtrl,
    updateCarCtrl,
    deleteCarCtrl 
} = require("../controllers/carsController");

// المسار العام: /api/cars
router.route("/")
    .post(createCarCtrl)       // إنشاء سيارة جديدة (Admin)
    .get(getAllCarsCtrl);      // جلب كل السيارات "أو" الفلترة حسب التاريخ والموقع

// المسارات الخاصة بسيارة معينة: /api/cars/:id
router.route("/:id")
    .get(getSingleCarCtrl)     // جلب تفاصيل سيارة واحدة
    .put(updateCarCtrl)        // تعديل بيانات سيارة (Admin)
    .delete(deleteCarCtrl);    // حذف سيارة نهائياً (Admin)

module.exports = router;