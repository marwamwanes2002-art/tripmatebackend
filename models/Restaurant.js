const mongoose = require("mongoose");
const Joi = require("joi");

// 1. تعريف الـ Schema
const RestaurantSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 100,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 1000,
    },
    cityId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'City',
        required: true,
    },
    location: {
        address: { type: String, required: true },
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
    },
    cuisineType: { 
        type: String,
        required: true,
        trim: true,
    },
    images: {
        type: [String],
        required: true,
    },
    star_rating: {
        type: Number,
        default: 0,
        min: 0, // تم تعديلها لـ 0 لتناسب الـ default
        max: 5,
    },
    opening_hours: [{
        day: { type: String, enum: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] },
        open: { type: String }, 
        close: { type: String } 
    }],
    amenities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Amenity'
    }]
}, { 
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

// الربط الوهمي مع التقييمات (تأكدي من استخدام اسم المتغير الصحيح RestaurantSchema)
RestaurantSchema.virtual('reviews', {
    ref: 'Review',
    localField: '_id',
    foreignField: 'item_id'
});

// تعريف الموديل
const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

// 2. توابع الـ Validation باستخدام Joi

// Validate Create Restaurant
function validateCreateRestaurant(obj) {
    const schema = Joi.object({
        title: Joi.string().trim().min(1).max(100).required(),
        description: Joi.string().trim().min(1).max(1000).required(),
        cityId: Joi.string().required(), // تحويلها لـ cityId لتطابق السكيما
        location: Joi.object({
            address: Joi.string().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
        }).required(),
        cuisineType: Joi.string().trim().required(),
        images: Joi.array().items(Joi.string()).min(1).required(),
        star_rating: Joi.number().min(0).max(5), // اختيارية لأن لها default
        opening_hours: Joi.array().items(
            Joi.object({
                day: Joi.string().valid('Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday').required(),
                open: Joi.string().required(),
                close: Joi.string().required()
            })
        ),
        amenities: Joi.array().items(Joi.string()) // مصفوفة من الـ IDs كـ Strings
    });
    return schema.validate(obj);
}

// Validate Update Restaurant
function validateUpdateRestaurant(obj) {
    const schema = Joi.object({
        title: Joi.string().trim().min(1).max(100),
        description: Joi.string().trim().min(1).max(1000),
        cityId: Joi.string(),
        location: Joi.object({
            address: Joi.string(),
            latitude: Joi.number(),
            longitude: Joi.number(),
        }),
        cuisineType: Joi.string().trim(),
        images: Joi.array().items(Joi.string()).min(1),
        star_rating: Joi.number().min(0).max(5),
        opening_hours: Joi.array().items(
            Joi.object({
                day: Joi.string().valid('Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'),
                open: Joi.string(),
                close: Joi.string()
            })
        ),
        amenities: Joi.array().items(Joi.string())
    });
    return schema.validate(obj);
}

module.exports = {
    Restaurant,
    validateCreateRestaurant,
    validateUpdateRestaurant
};