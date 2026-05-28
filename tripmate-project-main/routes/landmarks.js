const express = require("express");
const router = express.Router();
const { 
    createLandmarkCtrl, 
    getAllLandmarksCtrl, 
    getSingleLandmarkCtrl, 
    updateLandmarkCtrl, 
    deleteLandmarkCtrl 
} = require("../controllers/landmarkController");

// /api/landmarks
router.route("/")
    .post(createLandmarkCtrl) // إضافة معلم جديد
    .get(getAllLandmarksCtrl); // جلب كل المعالم أو البحث فيها

// /api/landmarks/:id
router.route("/:id")
    .get(getSingleLandmarkCtrl) // جلب معلم واحد عن طريق الـ ID
    .put(updateLandmarkCtrl)    // تعديل معلم
    .delete(deleteLandmarkCtrl); // حذف معلم

module.exports = router;