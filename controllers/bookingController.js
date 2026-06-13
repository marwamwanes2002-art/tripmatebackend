const asyncHandler = require("express-async-handler");
const { Booking, validateCreateBooking } = require("../models/Booking");
const { Notification } = require("../models/Notification"); // استيراد موديل الإشعارات

/**
 * @desc    Create New Booking & Send Notification
 * @route   /api/bookings
 * @method  POST
 * @access  private (logged in user)
 */
module.exports.createBookingCtrl = asyncHandler(async (req, res) => {
    // 1. Validation (Joi)
    const { error } = validateCreateBooking(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    // 2. Create booking and save to DB
    const booking = new Booking({
        user: req.user.id,
        bookingType: req.body.bookingType, // يستقبل "Car" أو "Hotel" أو "Restaurant" ديناميكياً
        serviceId: req.body.serviceId,     // الـ ID الخاص بالخدمة المحجوزة
        serviceName: req.body.serviceName, // اسم الفندق أو السيارة
        
        // دعم مسمى المدينة أو الموقع حسب ما يرسله الفرونت إيند
        city: req.body.city || req.body.location, 
        
        bookingDate: req.body.bookingDate || new Date(),
        
        // دمج تواريخ الفنادق والسيارات باستخدام عامل الأمان (||)
        checkInDate: req.body.checkInDate || req.body.pickupDate,
        checkOutDate: req.body.checkOutDate || req.body.dropoffDate,
        
        totalPrice: req.body.totalPrice,
        status: req.body.status || "pending"
    });

    const result = await booking.save();

    // 3. إضافة الإشعار تلقائياً بعد نجاح الحجز
    await Notification.create({
        user: req.user.id,
        title: "تم استلام طلب الحجز 🎉",
        message: `تم حجز ${req.body.serviceName} بنجاح. يمكنك متابعة حالة الحجز من قائمة الحجوزات.`
    });

    res.status(201).json(result);
});

/**
 * @desc    Get User Bookings
 * @route   /api/bookings
 * @method  GET
 * @access  private (logged in user)
 */
module.exports.getUserBookingsCtrl = asyncHandler(async (req, res) => {
    const bookings = await Booking.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(bookings);
});