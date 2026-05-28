const asyncHandler = require("express-async-handler");
const { Landmark, validateCreateLandmark, validateUpdateLandmark } = require("../models/Landmark");

/**
 * @desc    Create New Landmark
 * @route   /api/landmarks
 * @method  POST
 * @access  private (Admin only)
 */
const createLandmarkCtrl = asyncHandler(async (req, res) => {
    const { error } = validateCreateLandmark(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const landmark = new Landmark(req.body);
    const result = await landmark.save();
    res.status(201).json(result);
});

/**
 * @desc    Get All Landmarks (With Search & Featured Filter)
 * @route   /api/landmarks
 * @method  GET
 * @access  public
 */
const getAllLandmarksCtrl = asyncHandler(async (req, res) => {
    const { search, featured } = req.query;
    let filter = {};

    // 1. فلترة المعالم المميزة (تم إصلاحها لتدعم true و false بدقة)
    if (featured !== undefined) {
        filter.isFeatured = (featured === "true");
    }

    // 2. منطق البحث الذكي (في الاسم أو العنوان)
    if (search) {
        filter.$or = [
            { title: { $regex: search, $options: "i" } },
            // ملاحظة: إذا كان الـ location عندك نصاً مباشراً، نستخدم المفتاح مباشرة
            { location: { $regex: search, $options: "i" } },
            // وإذا كان أوبجكت بداخله address، نترك هذا السطر
            { "location.address": { $regex: search, $options: "i" } }
        ];
    }

    const landmarks = await Landmark.find(filter).sort("-createdAt");
    res.status(200).json(landmarks);
});

/**
 * @desc    Get Single Landmark
 * @route   /api/landmarks/:id
 * @method  GET
 * @access  public
 */
const getSingleLandmarkCtrl = asyncHandler(async (req, res) => {
    const landmark = await Landmark.findById(req.params.id);
    if (!landmark) return res.status(404).json({ message: "Landmark not found" });
    res.status(200).json(landmark);
});

/**
 * @desc    Update Landmark
 * @route   /api/landmarks/:id
 * @method  PUT
 * @access  private (Admin only)
 */
const updateLandmarkCtrl = asyncHandler(async (req, res) => {
    const { error } = validateUpdateLandmark(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const updatedLandmark = await Landmark.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
    );

    if (!updatedLandmark) return res.status(404).json({ message: "Landmark not found" });
    res.status(200).json(updatedLandmark);
});

/**
 * @desc    Delete Landmark
 * @route   /api/landmarks/:id
 * @method  DELETE
 * @access  private (Admin only)
 */
const deleteLandmarkCtrl = asyncHandler(async (req, res) => {
    const landmark = await Landmark.findById(req.params.id);
    if (!landmark) return res.status(404).json({ message: "Landmark not found" });

    await Landmark.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Landmark has been deleted successfully" });
});

module.exports = {
    createLandmarkCtrl,
    getAllLandmarksCtrl,
    getSingleLandmarkCtrl,
    updateLandmarkCtrl,
    deleteLandmarkCtrl
};