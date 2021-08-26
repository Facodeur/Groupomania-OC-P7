const express = require("express");
const authController = require("../controllers/auth.controller");

const router = express.Router();

// auth
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);

module.exports = router;
