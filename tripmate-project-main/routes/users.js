const router = require("express").Router();
const jwt = require("jsonwebtoken"); // استدعاء مكتبة التوكن لتعمل هنا

// 1. استدعاء جميع الدوال من الـ Controller
const {
    updateUser,
    getAllUsers,
    getUserById,
    deleteUser,
    updateDriverLocation // الدالة الجديدة لتحديث الموقع
} = require("../controllers/userController");


// 2. حراس الأمان (Middlewares) مكتوبين هنا مباشرة بشكل نظيف
function verifyToken(req, res, next) {
    const token = req.headers.token; // يقرأ التوكن من الهيدر كما جربناه في بوست مان
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            req.user = decoded; // حفظ بيانات المستخدم المستخرجة من التوكن
            next();
        } catch (error) {
            res.status(401).json({ message: "invalid token" });
        }
    } else {
        res.status(401).json({ message: "no token provided" });
    }
}

function verifyTokenAndAuthorization(req, res, next) {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            return res.status(403).json({ message: "you are not allowed" });
        }
    });
}

function verifyTokenAndAdmin(req, res, next) {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            return res.status(403).json({ message: "you are not allowed, only admin allowed" });
        }
    });
}


// 3. المسارات (Routes)
// 🚨 الترتيب هنا ذهبي ومقدس: مسار تحديث الموقع يجب أن يكون فوق الـ (:id) دائماً
/**
 * @route   /api/users/update-location
 * @desc    تحديث موقع السائق كل 10 ثوانٍ
 * @access  private (بحاجة لتوكن السائق)
 */
router.put("/update-location", verifyToken, updateDriverLocation);

/**
 * @route   /api/users
 * @desc    جلب جميع المستخدمين (للأدمن فقط)
 * @access  private (Admin)
 */
router.get("/", verifyTokenAndAdmin, getAllUsers);

/**
 * @route   /api/users/:id
 * @desc    العمليات التي تتم باستخدام معرف المستخدم (ID)
 */
router.route("/:id")
    .get(verifyToken, getUserById)       // جلب مستخدم محدد
    .put(verifyToken, updateUser)        // تحديث الملف الشخصي والصورة
    .delete(verifyToken, deleteUser);    // حذف مستخدم


// 4. التصدير الوحيد والرئيسي للملف بالكامل هو الـ router ليقرأه ملف سيرفرك الأساسي (app.js)
module.exports = router;