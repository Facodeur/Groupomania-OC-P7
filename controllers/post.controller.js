const postModel = require("../models").Post;
const userModel = require("../models").User;

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
