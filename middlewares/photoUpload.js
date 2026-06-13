const multer = require("multer");
const path = require("path");

// إعداد التخزين
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // نحدد المجلد الذي أنشأتِه في الصورة
        cb(null, path.join(__dirname, "../images")); 
    },
    filename: function (req, file, cb) {
        // إعطاء اسم فريد للصورة لتجنب التكرار
        cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
    }
});

// فلتر للتأكد من أن الملف المرفوع هو صورة فقط
const photoUpload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        if (file.mimetype.startsWith("image")) {
            cb(null, true);
        } else {
            cb({ message: "تنسيق الملف غير مدعوم، يرجى رفع صورة فقط" }, false);
        }
    },
    limits: { fileSize: 1024 * 1024 * 2 } // الحد الأقصى 2 ميجابايت
});

module.exports = photoUpload;