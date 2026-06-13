require("dotenv").config();
const connectToDb = require("./config/db");
const { Car } = require("./models/Car");
const { Hotel } = require("./models/Hotel");
const { Restaurant } = require("./models/Restaurant");
const { Landmark } = require("./models/Landmark");
const City = require("./models/City"); 
const Amenity = require("./models/Amenity");

const { cities, amenities } = require("./data"); // جلب المدن والميزات فقط من data
const { restaurants } = require("./restaurantsData"); // جلب المطاعم من ملفها المخصص
const { hotels } = require("./hotelsData");
const { cars } = require("./carsData");

// تشغيل الاتصال بقاعدة البيانات
connectToDb();

// دالة استيراد وضخ كل البيانات دفعة واحدة 📥
const importData = async () => {
    try {
        // خطوة أمان اختيارية: تنظيف الجداول تماماً قبل الضخ لمنع أي تكرار
        await City.deleteMany();
        await Amenity.deleteMany();
        await Hotel.deleteMany();
        await Car.deleteMany(); // مسح السيارات القديمة (موجودة مسبقاً لديكِ)
        await Restaurant.deleteMany();
        //await Landmark.deleteMany();
        console.log("Old data cleaned successfully...");

        // ضخ البيانات الجديدة بالتوالي
        await City.insertMany(cities);
        await Amenity.insertMany(amenities);
        await Hotel.insertMany(hotels);
        await Car.insertMany(cars); // 🔥 السطر الجديد: ضخ مصفوفة السيارات داخل قاعدة البيانات
        await Restaurant.insertMany(restaurants);
       // await Landmark.insertMany(landmarks);

        console.log("All Data (Cities, Amenities, Hotels, Cars, Restaurants, Landmarks) Imported Successfully! ✅");
        process.exit();
    } catch (error) {
        console.error("Error during data injection:", error);
        process.exit(1);
    }
};

// دالة مسح وتنظيف القاعدة بالكامل عند الحاجة 🗑️
const removeData = async () => {
    try {
        await City.deleteMany();
        await Amenity.deleteMany();
        await Hotel.deleteMany();
        await Car.deleteMany(); // 🔥 السطر الجديد: مسح جدول السيارات عند استدعاء أمر التنظيف العام
        await Restaurant.deleteMany();
       // await Landmark.deleteMany();
        
        console.log("Database cleared successfully! 🗑️");
        process.exit();
    } catch (error) {
        console.error("Error during data removal:", error);
        process.exit(1);
    }
};

// تشغيل الدالة بناءً على الأوامر في التيرمينال
if (process.argv[2] === "-import") {
    importData();
} else if (process.argv[2] === "-remove") {
    removeData();
}