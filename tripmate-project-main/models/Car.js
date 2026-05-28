const mongoose = require('mongoose');
const Joi = require('joi'); // استدعاء مكتبة جوي لإجراء التحقق من المدخلات

// 1. تعريف الـ Schema الخاص بالـ MongoDB
const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  rating: { type: Number, default: 0 },
  reviewsCount: { type: Number, default: 0 },
  dailyPrice: { type: Number, required: true },
  weeklyPrice: { type: Number },
  seats: { type: Number, required: true },          
  transmission: { type: String, required: true },   
  fuel: { type: String, required: true },           
  bags: { type: Number, required: true },           
  features: [{ type: String }],
  description: { type: String },
  rentalTerms: {
    insuranceIncluded: { type: Boolean, default: true }, 
    kmPerDay: { type: Number },                          
    minAge: { type: Number },                            
    deposit: { type: Number }                            
  },
  pickupLocation: { type: String, required: true },
  images: [{ type: String }]
}, { timestamps: true });

const Car = mongoose.model('Car', carSchema);

// 2. دالة التحقق من البيانات عند إضافة سيارة جديدة (Create)
function validateCreateCar(obj) {
    const schema = Joi.object({
        name: Joi.string().trim().required(),
        type: Joi.string().trim().required(),
        dailyPrice: Joi.number().min(1).required(),
        weeklyPrice: Joi.number().min(1),
        seats: Joi.number().integer().min(1).required(),
        transmission: Joi.string().trim().required(),
        fuel: Joi.string().trim().required(),
        bags: Joi.number().integer().min(0).required(),
        features: Joi.array().items(Joi.string().trim()),
        description: Joi.string().trim(),
        rentalTerms: Joi.object({
            insuranceIncluded: Joi.boolean(),
            kmPerDay: Joi.number().min(1),
            minAge: Joi.number().integer().min(18),
            deposit: Joi.number().min(0)
        }),
        pickupLocation: Joi.string().trim().required(),
        images: Joi.array().items(Joi.string().trim())
    });
    return schema.validate(obj);
}

// 3. دالة التحقق من البيانات عند تعديل سيارة قائمة (Update)
function validateUpdateCar(obj) {
    const schema = Joi.object({
        name: Joi.string().trim(),
        type: Joi.string().trim(),
        dailyPrice: Joi.number().min(1),
        weeklyPrice: Joi.number().min(1),
        seats: Joi.number().integer().min(1),
        transmission: Joi.string().trim(),
        fuel: Joi.string().trim(),
        bags: Joi.number().integer().min(0),
        features: Joi.array().items(Joi.string().trim()),
        description: Joi.string().trim(),
        rentalTerms: Joi.object({
            insuranceIncluded: Joi.boolean(),
            kmPerDay: Joi.number().min(1),
            minAge: Joi.number().integer().min(18),
            deposit: Joi.number().min(0)
        }),
        pickupLocation: Joi.string().trim(),
        images: Joi.array().items(Joi.string().trim())
    });
    return schema.validate(obj);
}

// 4. تصدير الموديل والدوال لاستخدامها في الـ Controller
module.exports = {
    Car,
    validateCreateCar,
    validateUpdateCar
};