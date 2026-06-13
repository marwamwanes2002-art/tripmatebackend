const mongoose = require('mongoose');

const amenitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true, // لضمان عدم تكرار نفس الميزة (مثلاً WiFi) مرتين
        trim: true
    },
    icon: {
        type: String, // اسم الأيقونة أو رابط الـ SVG
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Amenity', amenitySchema);