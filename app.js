const express = require("express");
const logger = require("./middlewares/logger");
const { notFound, errorHandler} = require("./middlewares/errors");
require("dotenv").config();
const connectToDB = require("./config/db");
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");

// Connection To Database
connectToDB();

// Init App
const app = express();
// جعل مجلد images متاحاً للوصول عبر المتصفح/الموبايل
app.use("/images", express.static(path.join(__dirname, "images")));

// Apply Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);

// Helmet & CORS
app.use(helmet());
app.use(cors());


// Routes
app.use("/api/reviews", require("./routes/reviews"));
app.use("/api/cars", require("./routes/cars"));
app.use("/api/hotels", require("./routes/hotels"));
app.use("/api/restaurants", require("./routes/restaurants"));
app.use("/api/flights", require("./routes/flights"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/password", require("./routes/password"));
app.use("/api/landmarks", require("./routes/landmarks"));
app.use("/api/bookings", require("./routes/bookings"));
app.use("/api/driver-requests", require("./routes/driverRequest"));
// --- الجزء الجديد الخاص بالإشعارات ---
app.use("/api/notifications", require("./routes/notifications")); 
// ------------------------------------

// Error Handler Middleware
app.use(notFound);
app.use(errorHandler);

// Running The Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});