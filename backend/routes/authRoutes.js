const express = require("express");
const router = express.Router();
const { register, login, getProfile } = require("../controllers/authController");
const auth = require("../middleware/authmiddleware");

router.post("/register", register);
router.post("/login", login);

// Protected Routes
router.post("/get-profile", auth, getProfile);

module.exports = router;