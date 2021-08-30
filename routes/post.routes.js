const express = require("express");
const postController = require("../controllers/post.controller");
const authJwt = require("../middleware/authJwt");


const router = express.Router();

router.post("/", authJwt, postController.createPost);


module.exports = router;