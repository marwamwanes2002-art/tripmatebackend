const asyncHandler = require("express-async-handler");
const { Hotel, validateCreateHotel, validateUpdateHotel } = require("../models/Hotel");

/**
 * @desc    Create New Hotel
 * @route   /api/hotels
 * @method  POST
 * @access  private (Admin only)
 */
const createHotelCtrl = asyncHandler(async (req, res) => {
    const { error } = validateCreateHotel(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const hotel = new Hotel(req.body);
    const result = await hotel.save();
    res.status(201).json(result);
});

/**
 * @desc    Get All Hotels (With Search Capability)
 * @route   /api/hotels
 * @method  GET
 * @access  public
 */

const getAllHotelsCtrl = asyncHandler(async (req, res) => {
    // 1. استخراج كلمة البحث من الرابط (Query String) باستخدام 'search'
    const { search } = req.query;
    let filter = {};

    // 2. إذا وجد نص في خانة البحث
    if (search) {
        filter = {
            $or: [
                { title: { $regex: search, $options: "i" } }, // البحث في اسم الفندق (جزئي)
                { location: { $regex: search, $options: "i" } }
            ]
        };
    }

    const hotels = await Hotel.find(filter).sort("-createdAt");
    res.status(200).json(hotels);
});

/**
 * @desc    Get Single Hotel
 * @route   /api/hotels/:id
 * @method  GET
 * @access  public
 */
const getSingleHotelCtrl = asyncHandler(async (req, res) => {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) return res.status(404).json({ message: "hotel not found" });
    res.status(200).json(hotel);
});

/**
 * @desc    Update Hotel
 * @route   /api/hotels/:id
 * @method  PUT
 * @access  private (Admin only)
 */
const updateHotelCtrl = asyncHandler(async (req, res) => {
    const { error } = validateUpdateHotel(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const updatedHotel = await Hotel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
    );

    if (!updatedHotel) return res.status(404).json({ message: "hotel not found" });
    
    res.status(200).json(updatedHotel);
});

/**
 * @desc    Delete Hotel
 * @route   /api/hotels/:id
 * @method  DELETE
 * @access  private (Admin only)
 */
const deleteHotelCtrl = asyncHandler(async (req, res) => {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) return res.status(404).json({ message: "hotel not found" });

    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "hotel has been deleted successfully" });
});

module.exports = {
    createHotelCtrl,
    getAllHotelsCtrl,
    getSingleHotelCtrl,
    updateHotelCtrl,
    deleteHotelCtrl
};