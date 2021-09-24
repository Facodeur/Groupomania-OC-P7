const express = require("express");
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");
const authJwt = require("../middleware/authJwt");

const router = express.Router();

// authentification
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);

//jwt récupération de l'id user
router.get('/jwtid', authJwt, (req, res) => {
  res.status(200).json(res.locals.user.id)
});

// Données utilisateur
router.get('/', authJwt, userController.getAllUsers);
router.get("/profile", authJwt, userController.userInfo);
router.put("/:id", authJwt, userController.userUpdate);
router.delete("/:id", authJwt, userController.userDelete);

module.exports = router;