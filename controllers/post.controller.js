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
            picture: req.body.picture,
            userId: user.id,
          })
          .then((data) => {
            console.log(data);
            res.status(201).json({
              status: 1,
              data: data,
            });
          })
          .catch((err) => {
            res.status(500).json({ status: 0, error: err.message });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({
        status: 0,
        message: "Vous n'avez pas l'autorisation",
        error: err.message,
      });
    });
};
