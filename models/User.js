const mongoose = require("mongoose");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const jwt = require("jsonwebtoken");

// User Schema 
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 100,
        unique: true,
    },
    fullName: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 200,
    },
    fatherName: {
        type: String,
        trim: true,
        default: "",
    },
    motherName: {
        type: String,
        trim: true,
        default: "",
    },
    idPassportNumber: {
        type: String,
        trim: true,
        default: "",
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
    }, 
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
        minlength: 10,
    },
    profilePic: {
        type: String,
        default: "default-avatar.png",
        trim: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    // ---- الإضافات الخاصة بنظام التكسي (طلب سائق) ----
    role: {
        type: String,
        enum: ["passenger", "driver", "admin"],
        default: "passenger",
    },
    driverInfo: {
        vehicleModel: {
            type: String,
            default: "DFSK Electric 2025" // 👈 هيك أي كابتن بيسجل بدون ما يحدد نوع سيارته، السيستم بيعطيه هالسيارة فوراً
        },
        plateNumber: { type: String, default: "" },  // رقم اللوحة
        isAvailable: { type: Boolean, default: false }, // متاح لاستقبال الطلبات
        currentLocation: {
            type: { type: String, default: 'Point' },
            coordinates: { type: [Number], default: [36.29128, 33.51306] } // [lng, lat]
        }
    }
}, { timestamps: true });

// تفعيل البحث الجغرافي السريع في قاعدة البيانات
UserSchema.index({ "driverInfo.currentLocation": "2dsphere" });

// Generate Token
UserSchema.methods.generateToken = function() {
    return jwt.sign({ id: this._id, isAdmin: this.isAdmin, role: this.role }, process.env.JWT_SECRET_KEY);
}

const User = mongoose.model("User", UserSchema);

// دالة فحص بيانات الراكب العادي
function validateRegisterUser(obj) {
    const schema = Joi.object({
        email: Joi.string().trim().min(5).max(100).required().email(),
        fullName: Joi.string().trim().min(1).max(200).required(),
        password: passwordComplexity().required(),
        confirmPassword: Joi.string().required().valid(Joi.ref('password')).messages({
            'any.only': 'كلمة المرور غير متطابقة',
        }),
        phoneNumber: Joi.string().trim().min(10).required(),
    });
    return schema.validate(obj);
}

// ⭐ الدالة الجديدة: فحص بيانات السائق القادمة من واجهة السائق في فلاتر
function validateRegisterDriver(obj) {
    const schema = Joi.object({
        email: Joi.string().trim().min(5).max(100).required().email(),
        fullName: Joi.string().trim().min(1).max(200).required(),
        password: passwordComplexity().required(),
        confirmPassword: Joi.string().required().valid(Joi.ref('password')).messages({
            'any.only': 'كلمة المرور غير متطابقة',
        }),
        phoneNumber: Joi.string().trim().min(10).required(),
        role: Joi.string().valid("driver").required(), // يجب إرسال الحقل برمجياً لضمان أنه سائق
        vehicleModel: Joi.string().trim().required().messages({
            'any.required': 'موديل السيارة مطلوب لتسجيل السائق'
        }),
        plateNumber: Joi.string().trim().required().messages({
            'any.required': 'رقم اللوحة مطلوب لتسجيل السائق'
        })
    });
    return schema.validate(obj);
}

function validateLoginUser(obj) {
    const schema = Joi.object({
        email: Joi.string().trim().min(5).max(100).required().email(),
        password: Joi.string().trim().min(6).required(),
    });
    return schema.validate(obj);
}

function validateUpdateUser(obj) {
    const schema = Joi.object({
        fullName: Joi.string().trim().min(1).max(200),
        phoneNumber: Joi.string().trim().min(10),
        fatherName: Joi.string().trim().allow(""),
        motherName: Joi.string().trim().allow(""),
        idPassportNumber: Joi.string().trim().allow(""),
        profilePic: Joi.string().trim(),
    });
    return schema.validate(obj);
}

function validateChangePassword(obj) {
    const schema = Joi.object({
        email: Joi.string().trim().min(5).max(100).required().email(),
        oldPassword: Joi.string().required(), 
        newPassword: passwordComplexity().required(),
        confirmPassword: Joi.string().required().valid(Joi.ref('newPassword')).messages({
            'any.only': 'كلمة المرور الجديدة غير متطابقة',
        }),
    });
    return schema.validate(obj);
}

module.exports = {
    User,
    validateRegisterUser,
    validateRegisterDriver, // تم تصدير الدالة الجديدة هنا نجاح
    validateLoginUser,
    validateUpdateUser,
    validateChangePassword
};