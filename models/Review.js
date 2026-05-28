const mongoose = require("mongoose");
const Joi = require('joi');

// Reviews Schema
const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        // تعديل: التعليق مطلوب لكل الحالات إلا إذا كان 'Car' بصير اختياري
        required: function() {
            return this.item_type !== 'Car';
        }
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    item_id: {
        type: mongoose.Schema.Types.ObjectId,
        // مطلوب للفنادق والمطاعم والسيارات، ومرفوع عنه القيد فقط للـ App
        required: function() {
            return this.item_type !== 'App';
        },
        refPath: 'item_type' 
    },
    item_type: {
        type: String,
        required: true,
        enum: ['Hotel', 'Restaurant', 'App', 'Car'] // أضفنا 'Car' هنا
    }
}, { timestamps: true });

// التابع (Static Method) - شغال تلقائياً للسيارات بفضل الـ Dynamic Architecture
reviewSchema.statics.calculateAverageRating = async function(itemId, itemType) {
    if (itemType === 'App' || !itemId) return;

    const stats = await this.aggregate([
        { 
            $match: { 
                item_id: new mongoose.Types.ObjectId(itemId) 
            } 
        }, 
        { 
            $group: {
                _id: '$item_id',
                nRating: { $sum: 1 },         
                avgRating: { $avg: '$rating' } 
            }
        }
    ]);

    if (stats.length > 0) {
        // إذا كان itemType هو 'Car'، المونغوز سيستدعي موديل الـ Car ويحدث الـ star_rating تبعه
        await mongoose.model(itemType).findByIdAndUpdate(itemId, {
            star_rating: Math.round(stats[0].avgRating * 10) / 10
        });
    } else {
        await mongoose.model(itemType).findByIdAndUpdate(itemId, { star_rating: 0 });
    }
};

reviewSchema.post('save', function() {
    this.constructor.calculateAverageRating(this.item_id, this.item_type);
});

reviewSchema.post('findOneAndDelete', function(doc) {
    if (doc) {
        doc.constructor.calculateAverageRating(doc.item_id, doc.item_type);
    }
});

// ------------------- Joi Validation -------------------

function validateCreateReview(obj) {
    const schema = Joi.object({
        rating: Joi.number().min(1).max(5).required(),
        
        // تعديل الـ Joi: التعليق مطلوب دائماً، إلا إذا كان 'Car' بصير اختياري ومسموح يمر فاضي
        comment: Joi.string().trim().min(1).max(1000).when('item_type', {
            is: 'Car',
            then: Joi.optional().allow(null, ''),
            otherwise: Joi.required()
        }),
        
        item_type: Joi.string().valid('Hotel', 'Restaurant', 'App', 'Car').required(),
        
        item_id: Joi.string().hex().length(24).when('item_type', {
            is: 'App',
            then: Joi.optional().allow(null, ''),
            otherwise: Joi.required()
        })
    });

    return schema.validate(obj);
}

module.exports = {
    Review: mongoose.model('Review', reviewSchema),
    validateCreateReview
};