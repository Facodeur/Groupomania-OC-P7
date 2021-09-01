const express = require("express");
const postController = require("../controllers/post.controller");
const authJwt = require("../middleware/authJwt");
const multer = require("../middleware/multer-config");

const router = express.Router();

router.get("/", authJwt, postController.getAllPosts);
router.post("/", authJwt, multer, postController.createPost);
router.put("/:id", authJwt, multer, postController.updatePost);

module.exports = router;