const mongoose = require("mongoose");
const Joi = require("joi");

// Flight Schema
const FlightSchema = new mongoose.Schema({
    airline: { // شركة الطيران
        type: String,
        required: true,
        trim: true,
    },
    flightNumber: { // رقم الرحلة
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    departureAirport: { // مطار الإقلاع
        type: String,
        required: true,
        trim: true,
    },
    destinationAirport: { // مطار الوصول
        type: String,
        required: true,
        trim: true,
    },
    departureTime: { // وقت الإقلاع
        type: Date,
        required: true,
    },
    arrivalTime: { // وقت الوصول
        type: Date,
        required: true,
    },
    price: { // سعر التذكرة
        type: Number,
        required: true,
        min: 1,
    }
}, { timestamps: true });

// Flight Model
const Flight = mongoose.model("Flight", FlightSchema);

// Validate Create Flight
function validateCreateFlight(obj) {
    const schema = Joi.object({
        airline: Joi.string().trim().required(),
        flightNumber: Joi.string().trim().required(),
        departureAirport: Joi.string().trim().required(),
        destinationAirport: Joi.string().trim().required(),
        departureTime: Joi.date().required(),
        arrivalTime: Joi.date().required(),
        price: Joi.number().min(1).required(),
        images: Joi.array().items(Joi.string()),
    });
    return schema.validate(obj);
}

// Validate Update Flight
function validateUpdateFlight(obj) {
    const schema = Joi.object({
        airline: Joi.string().trim(),
        flightNumber: Joi.string().trim(),
        departureAirport: Joi.string().trim(),
        destinationAirport: Joi.string().trim(),
        departureTime: Joi.date(),
        arrivalTime: Joi.date(),
        price: Joi.number().min(1),
        images: Joi.array().items(Joi.string()),
    });
    return schema.validate(obj);
}

module.exports = {
    Flight,
    validateCreateFlight,
    validateUpdateFlight
};