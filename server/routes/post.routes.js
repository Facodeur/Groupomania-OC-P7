const express = require("express");
const postController = require("../controllers/post.controller");
const authJwt = require("../middleware/authJwt");
const multer = require("../middleware/multer-config");

const router = express.Router();

router.get("/", postController.getAllPosts);
router.post("/", authJwt, multer, postController.createPost);
router.put("/:id", authJwt, postController.updatePost);
router.delete("/:id", authJwt, postController.deletePost);

// comments
router.patch('/comment-post/:id', authJwt, postController.commentPost);
router.patch('/edit-comment-post/:id', authJwt, postController.editCommentPost);
router.patch('/delete-comment-post/:id', authJwt, postController.deleteCommentPost);

module.exports = router;