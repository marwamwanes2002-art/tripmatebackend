const mongoose = require("mongoose");
const Joi = require("joi");

const DriverRequestSchema = new mongoose.Schema({
    passenger: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    driver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null // يبقى null حتى يوافق كابتن على الرحلة
    },
    pickupLocation: {
        address: { type: String, required: true },
        type: { type: String, default: 'Point' },
        coordinates: { type: [Number], required: true } // [lng, lat]
    },
    dropoffLocation: {
        address: { type: String, required: true },
        type: { type: String, default: 'Point' },
        coordinates: { type: [Number], required: true } // [lng, lat]
    },
    status: {
        type: String,
        enum: ["pending", "accepted", "arrived", "ongoing", "completed", "cancelled"],
        default: "pending"
    },
    fare: {
        type: Number,
        required: true
    },
    distance: {
        type: String, // مثل "5.4 km"
        required: true
    },
    duration: {
        type: String, // مثل "12 mins"
        required: true
    }
}, { timestamps: true });

const DriverRequest = mongoose.model("DriverRequest", DriverRequestSchema);

// التحقق من البيانات القادمة من الفرونت إيند عبر Joi
function validateCreateRequest(obj) {
    const schema = Joi.object({
        pickupLocation: Joi.object({
            address: Joi.string().required(),
            coordinates: Joi.array().items(Joi.number()).length(2).required() // يتوقع مصفوفة [lng, lat]
        }).required(),
        dropoffLocation: Joi.object({
            address: Joi.string().required(),
            coordinates: Joi.array().items(Joi.number()).length(2).required() // يتوقع مصفوفة [lng, lat]
        }).required(),
        fare: Joi.number().required(),
        distance: Joi.string().required(),
        duration: Joi.string().required()
    });
    return schema.validate(obj);
}

module.exports = {
    DriverRequest,
    validateCreateRequest
};