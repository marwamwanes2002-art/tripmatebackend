const asyncHandler = require("express-async-handler");
const { Review, validateCreateReview } = require("../models/Review");

/**
 * @desc    Create New Review (فندق، مطعم، سيارة، أو تطبيق)
 * @route   /api/reviews
 * @method  POST
 * @access  private (Logged-in users only)
 */
const createReview = asyncHandler(async (req, res) => {
    // 1. التحقق من صحة البيانات القادمة باستخدام Joi
    const { error } = validateCreateReview(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    // 2. إنشاء مستند التقييم الجديد
    // ملاحظة: الـ userId بناخده من الـ req.user اللي بيجهزه ميديليوير الـ auth
    const review = new Review({
        rating: req.body.rating,
        comment: req.body.comment,
        item_type: req.body.item_type,
        item_id: req.body.item_id, // بكون اختياري لو الـ item_type هو 'App'
        userId: req.user.id 
    });

    const result = await review.save();
    
    res.status(201).json({
        message: "تم إضافة التقييم بنجاح",
        review: result
    });
});

/**
 * @desc    Get Reviews (جلب التقييمات بناءً على الفلتر - تطبيق، فندق معين، إلخ)
 * @route   /api/reviews
 * @method  GET
 * @access  public
 */
const getReviews = asyncHandler(async (req, res) => {
    const { item_type, item_id } = req.query;
    let query = {};

    // إذا غزل طلب واجهة التطبيق بيبعت ?item_type=App
    // وإذا دخل واجهة فندق بيبعت ?item_type=Hotel&item_id=ID_الفندق
    if (item_type) query.item_type = item_type;
    if (item_id) query.item_id = item_id;

    const reviews = await Review.find(query)
        .populate("userId", "fullName profilePic") // جلب اسم المستخدم وصورته الشخصية لعرضها بالتعليق
        .sort({ createdAt: -1 }); // ترتيب من الأحدث للأقدم

    res.status(200).json(reviews);
});

/**
 * @desc    Delete Review
 * @route   /api/reviews/:id
 * @method  DELETE
 * @access  private (صاحب التعليق أو الأدمن فقط)
 */
const deleteReview = asyncHandler(async (req, res) => {
    // 1. جلب التعليق من قاعدة البيانات أولاً لمعرفة صاحبه
    const review = await Review.findById(req.params.id);
    if (!review) {
        return res.status(404).json({ message: "التعليق غير موجود" });
    }

    // 2. التحقق الذكي: هل المستخدم هو صاحب التعليق؟ أو هل المستخدم هو أدمن؟
    if (review.userId.toString() === req.user.id || req.user.isAdmin) {
        
        // إذا تحقق أحد الشرطين، بنحذف فوراً
        await Review.findByIdAndDelete(req.params.id);
        
        return res.status(200).json({ message: "تم حذف التعليق بنجاح بواسطة الصلاحيات المخولة" });
    } else {
        // إذا لا هاد ولا هاد، بنرفض الطلب
        return res.status(403).json({ message: "غير مسموح لك بحذف هذا التعليق، فقط صاحب الحساب أو الأدمن" });
    }
});

module.exports = {
    createReview,
    getReviews,
    deleteReview
};