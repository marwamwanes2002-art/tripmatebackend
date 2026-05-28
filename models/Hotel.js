const mongoose = require("mongoose");
const Joi = require("joi");

const HotelsSchema = new mongoose.Schema({
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
    images: {
        type: [String],
        required: true,
    },
    star_rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
    },
    hotelRoom: [{
        roomType: { type: String, enum: ['Single', 'Double', 'Suite', 'Family'], required: true },
        pricePerNight: { type: Number, required: true },
        capacity: { type: Number, required: true },
        isAvailable: { type: Boolean, default: true },
        quantity: { type: Number, required: true, default: 1 } // حقل العدد الإجمالي للغرف
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

// الربط الوهمي (Virtual Populate) للتقييمات
HotelsSchema.virtual('reviews', {
    ref: 'Review',
    localField: '_id',
    foreignField: 'item_id'
});

const Hotel = mongoose.model("Hotel", HotelsSchema);

// Validate Create Hotel
function validateCreateHotel(obj) {
    const schema = Joi.object({
        title: Joi.string().trim().min(2).max(100).required(),
        description: Joi.string().trim().min(1).max(2000).required(),
        cityId: Joi.string().required(),
        location: Joi.object({
            address: Joi.string().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
        }).required(),
        images: Joi.array().items(Joi.string()).min(1).required(), 
        star_rating: Joi.number().min(0).max(5),
        hotelRoom: Joi.array().items(
            Joi.object({
                roomType: Joi.string().valid('Single', 'Double', 'Suite', 'Family').required(),
                pricePerNight: Joi.number().required(), 
                capacity: Joi.number().required(),     
                isAvailable: Joi.boolean(),
                quantity: Joi.number().integer().min(1).required() 
            })
        ).required(), // مصفوفة الغرف مطلوبة عند إنشاء الفندق
        amenities: Joi.array().items(Joi.string())
    });
    return schema.validate(obj);
}

// Validate Update Hotel
function validateUpdateHotel(obj) {
    const schema = Joi.object({
        title: Joi.string().trim().min(2).max(100),
        description: Joi.string().trim().min(1).max(2000),
        cityId: Joi.string(),
        location: Joi.object({
            address: Joi.string(),
            latitude: Joi.number(),
            longitude: Joi.number(),
        }),
        images: Joi.array().items(Joi.string()).min(1),
        star_rating: Joi.number().min(0).max(5),
        hotelRoom: Joi.array().items(
            Joi.object({
                roomType: Joi.string().valid('Single', 'Double', 'Suite', 'Family').required(),
                pricePerNight: Joi.number().required(), 
                capacity: Joi.number().required(),     
                isAvailable: Joi.boolean(),
                quantity: Joi.number().integer().min(1).required()
            })
        ),
        amenities: Joi.array().items(Joi.string())
    });
    return schema.validate(obj);
}

module.exports = {
    Hotel,
    validateCreateHotel,
    validateUpdateHotel
};