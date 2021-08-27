const express = require("express");
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");
const authJwt = require("../middleware/authJwt");

const router = express.Router();

// authentification
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);

// Données utilisateur
router.post("/profile", authJwt, userController.userInfo);
router.put("/:id", authJwt, userController.userUpdate);


module.exports = router;
