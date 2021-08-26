const express = require("express");
const authController = require("../controllers/auth.controller");

const router = express.Router();

// auth
router.post("/register", authController.signUp);

module.exports = router;
