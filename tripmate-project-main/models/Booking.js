const mongoose = require("mongoose");
const Joi = require("joi");

const BookingSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
    },
    bookingType: { 
        type: String, 
        enum: ["hotel", "restaurant", "flight", "car"], 
        required: true 
    },
    serviceId: { type: mongoose.Schema.Types.ObjectId, required: true },
    serviceName: { type: String, required: true },
    city: { type: String, required: true },
    bookingDate: { type: Date, required: true },
    // الحقول الموحدة للموديل
    checkInDate: { type: Date },
    checkOutDate: { type: Date },
    totalPrice: { type: Number, required: true },
    status: { 
        type: String, 
        enum: ["pending", "confirmed", "cancelled"], 
        default: "pending" 
    }
}, { timestamps: true });

const Booking = mongoose.model("Booking", BookingSchema);

// دالة التحقق المعدلة والمؤمنة بالكامل 🛠️
function validateCreateBooking(obj) {
    const schema = Joi.object({
        bookingType: Joi.string().valid("hotel", "restaurant", "flight", "car").required(),
        serviceId: Joi.string().required(),
        serviceName: Joi.string().required(),
        city: Joi.string().required(),
        bookingDate: Joi.date().required(),
        checkInDate: Joi.date().empty('').optional(),  // تم التعديل لمنع الأخطاء إذا كان الحقل فارغاً
        checkOutDate: Joi.date().empty('').optional(), // تم التعديل لمنع الأخطاء إذا كان الحقل فارغاً
        totalPrice: Joi.number().required(),
        status: Joi.string().valid("pending", "confirmed", "cancelled")
    });
    return schema.validate(obj);
}

module.exports = {
    Booking,
    validateCreateBooking
};