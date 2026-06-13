const mongoose = require("mongoose");
const Joi = require("joi");

// Landmark Schema (المعالم الأثرية والسياحية)
const LandmarkSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 2000,
    },
    city: { // أضفناه هنا أيضاً لتوحيد هيكلية البيانات في المشروع
        type: String,
        required: true,
        trim: true
    },
    location: {
        address: { type: String, required: true },
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
    },
    images: {
        type: [String],
        required: true,
    },
    isFeatured: { 
        type: Boolean,
        default: false 
    }
}, { timestamps: true });

const Landmark = mongoose.model("Landmark", LandmarkSchema);

// Validate Create Landmark
function validateCreateLandmark(obj) {
    const schema = Joi.object({
        title: Joi.string().trim().min(2).max(100).required(),
        description: Joi.string().trim().min(1).max(2000).required(),
        city: Joi.string().trim().required(), // التحقق من المدينة
        location: Joi.object({
            address: Joi.string().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
        }).required(),
        images: Joi.array().items(Joi.string()).min(1).required(),
        isFeatured: Joi.boolean()
    });
    return schema.validate(obj);
}

// Validate Update Landmark
function validateUpdateLandmark(obj) {
    const schema = Joi.object({
        title: Joi.string().trim().min(2).max(100),
        description: Joi.string().trim().min(1).max(2000),
        city: Joi.string().trim(),
        location: Joi.object({
            address: Joi.string(),
            latitude: Joi.number(),
            longitude: Joi.number(),
        }),
        images: Joi.array().items(Joi.string()).min(1),
        isFeatured: Joi.boolean()
    });
    return schema.validate(obj);
}

module.exports = {
    Landmark,
    validateCreateLandmark,
    validateUpdateLandmark
};