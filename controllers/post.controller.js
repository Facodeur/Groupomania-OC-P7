const postModel = require("../models").Post;
const userModel = require("../models").User;

exports.getAllPosts = (req, res) => {

  postModel
    .findAll({ order: [ ["createdAt", "DESC"]]})
    .then(posts => {
      res.status(200).json({
        status: 1,
        data: posts
      })
    })
    .ctach(err => {
      res.status(500).json({
        error: err.message
      })
    })

}

exports.createPost = (req, res) => {
  const user_id = req.data.id;

  userModel
    .findOne({
      where: {
        id: user_id,
      },
    })
    .then((user) => {
      if (user) {
        postModel
          .create({
            content: req.body.content,
            picture: req.file !== undefined ? `./images/${req.file.filename}` : "",
            userId: user.id,
          })
          .then(() => {
            res.status(201).json({
              status: 1,
              message: "Post enregistré",
            });
          })
          .catch((err) => {
            res.status(500).json({ status: 0, error: err.message });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};
