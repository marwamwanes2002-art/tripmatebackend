const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String, // رابط الصورة الأساسية للمدينة
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('City', citySchema);