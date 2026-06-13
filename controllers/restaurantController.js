const asyncHandler = require("express-async-handler");
const { Restaurant, validateCreateRestaurant, validateUpdateRestaurant } = require("../models/Restaurant");

/**
 * @desc    Create New Restaurant
 * @route   /api/restaurants
 * @method  POST
 * @access  private (Admin only)
 */
const createRestaurantCtrl = asyncHandler(async (req, res) => {
    const { error } = validateCreateRestaurant(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const restaurant = new Restaurant(req.body);
    const result = await restaurant.save();
    res.status(201).json(result);
});

/**
 * @desc    Get All Restaurants (With Search Capability)
 * @route   /api/restaurants
 * @method  GET
 * @access  public
 */
const getAllRestaurantsCtrl = asyncHandler(async (req, res) => {
    // 1. التقاط كلمة البحث من الـ Query String باسم title
    const { search } = req.query;
    let filter = {};

    // 2. إذا كتب المستخدم كلمة بحث، يتم تطبيق فلترة ذكية (الاسم أو العنوان)
    if (search) {
        filter = {
            $or: [
                { title: { $regex: search, $options: "i" } }, // البحث في اسم المطعم
                { location: { $regex: search, $options: "i" } }
            ]
        };
    }

    // 3. تمرير الفلتر لقاعدة البيانات
    const restaurants = await Restaurant.find(filter).sort("-createdAt");
    res.status(200).json(restaurants);
});

/**
 * @desc    Get Single Restaurant
 * @route   /api/restaurants/:id
 * @method  GET
 * @access  public
 */
const getSingleRestaurantCtrl = asyncHandler(async (req, res) => {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) return res.status(404).json({ message: "restaurant not found" });
    res.status(200).json(restaurant);
});

/**
 * @desc    Update Restaurant
 * @route   /api/restaurants/:id
 * @method  PUT
 * @access  private (Admin only)
 */
const updateRestaurantCtrl = asyncHandler(async (req, res) => {
    // 1. التحقق من البيانات المرسلة
    const { error } = validateUpdateRestaurant(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    // 2. تحديث المطعم في قاعدة البيانات
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true } // ليعيد البيانات الجديدة بعد التعديل
    );

    if (!updatedRestaurant) return res.status(404).json({ message: "restaurant not found" });
    
    res.status(200).json(updatedRestaurant);
});

/**
 * @desc    Delete Restaurant
 * @route   /api/restaurants/:id
 * @method  DELETE
 * @access  private (Admin only)
 */
const deleteRestaurantCtrl = asyncHandler(async (req, res) => {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) return res.status(404).json({ message: "restaurant not found" });

    await Restaurant.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "restaurant has been deleted successfully" });
});

module.exports = {
    createRestaurantCtrl,
    getAllRestaurantsCtrl,
    getSingleRestaurantCtrl,
    updateRestaurantCtrl,
    deleteRestaurantCtrl
};