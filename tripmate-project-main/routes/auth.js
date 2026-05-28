const express = require("express");
const router = express.Router();
const { registerUser, loginUser, changePassword } = require("../controllers/authController");

// المسار: /api/auth/register
router.route("/register").post(registerUser);

// المسار: /api/auth/login
router.route("/login").post(loginUser);

// المسار الجديد: /api/auth/change-password
router.route("/change-password").post(changePassword);

module.exports = router;