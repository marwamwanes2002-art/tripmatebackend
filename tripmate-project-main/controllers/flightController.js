const asyncHandler = require("express-async-handler");
const { Flight, validateCreateFlight, validateUpdateFlight } = require("../models/flight");

/**
 * @desc    Create New Flight
 * @route   /api/flights
 * @method  POST
 * @access  private (Admin only)
 */
const createFlightCtrl = asyncHandler(async (req, res) => {
    // 1. التحقق من صحة البيانات
    const { error } = validateCreateFlight(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    // 2. إنشاء الرحلة وحفظها
    const flight = new Flight(req.body);
    const result = await flight.save();
    res.status(201).json(result);
});

/**
 * @desc    Get All Flights
 * @route   /api/flights
 * @method  GET
 * @access  public
 */
const getAllFlightsCtrl = asyncHandler(async (req, res) => {
    const flights = await Flight.find().sort("-createdAt");
    res.status(200).json(flights);
});

/**
 * @desc    Get Single Flight
 * @route   /api/flights/:id
 * @method  GET
 * @access  public
 */
const getSingleFlightCtrl = asyncHandler(async (req, res) => {
    const flight = await Flight.findById(req.params.id);
    if (!flight) return res.status(404).json({ message: "flight not found" });
    res.status(200).json(flight);
});

/**
 * @desc    Update Flight
 * @route   /api/flights/:id
 * @method  PUT
 * @access  private (Admin only)
 */
const updateFlightCtrl = asyncHandler(async (req, res) => {
    const { error } = validateUpdateFlight(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const updatedFlight = await Flight.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
    );

    if (!updatedFlight) return res.status(404).json({ message: "flight not found" });
    
    res.status(200).json(updatedFlight);
});

/**
 * @desc    Delete Flight
 * @route   /api/flights/:id
 * @method  DELETE
 * @access  private (Admin only)
 */
const deleteFlightCtrl = asyncHandler(async (req, res) => {
    const flight = await Flight.findById(req.params.id);
    if (!flight) return res.status(404).json({ message: "flight not found" });

    await Flight.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "flight has been deleted successfully" });
});

module.exports = {
    createFlightCtrl,
    getAllFlightsCtrl,
    getSingleFlightCtrl,
    updateFlightCtrl,
    deleteFlightCtrl
};