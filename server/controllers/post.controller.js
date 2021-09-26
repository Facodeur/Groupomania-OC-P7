const postModel = require("../models").Post;
const userModel = require("../models").User;
const commentModel = require("../models").Comment;
const fs = require("fs");

exports.getAllPosts = (req, res) => {
  postModel
    .findAll({
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: userModel,
          attributes: ["username"],
        },
        {
          model: commentModel,
          require: true,
        },
      ],
    })
    .then((posts) => {
      res.status(200).send(posts);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

exports.createPost = (req, res) => {
  const user_id = res.locals.user.id;

  userModel
    .findOne({ where: { id: user_id } })
    .then((user) => {
      if (req.body.content === "" || req.body.content === undefined) {
        res.status(400).json({ message: "Veuillez écrire quelque chose" });
      }
      if (user) {
        postModel
          .create({
            content: req.body.content,
            picture:
              req.file !== undefined
                ? `./upload/posts/${req.file.filename}`
                : "",
            userId: user.id,
          })
          .then(() => {
            res.status(201).json({ message: "Post enregistré" });
          })
          .catch((err) => {
            res.status(500).json({ message: err.message });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

exports.updatePost = (req, res) => {
  const user_id = res.locals.user.id;

  postModel
    .findOne({ where: { id: req.params.id } })
    .then((post) => {
      if (post.userId === user_id) {
        postModel
          .update(
            {
              content: req.body.content,
              picture: post.picture,
            },
            { where: { id: req.params.id } }
          )
          .then((post) => {
            if (post == 1) {
              res.status(200).json({ message: "Le post a été modifié" });
            }
          });
      } else {
        res.status(401).json({ message: "Vous n'êtes pas autorisé" });
      }
    })
    .catch(() => {
      res.status(500).json({ message: "Ce post n'existe pas" });
    });
};

exports.deletePost = (req, res) => {
  const user_id = res.locals.user.id;
  const isAdmin = res.locals.user.isAdmin;

  postModel
  .findOne({ where: { id: req.params.id } })
  .then((post) => {
    if (post.userId === user_id || isAdmin === 1 ) {
      const filename = post.picture.split("/upload/posts/")[1];
      
      fs.unlink(`../client/public/upload/posts/${filename}`, () => {
        
          postModel
            .destroy({ where: { id: req.params.id } })
            .then((post) => {
              if (post === 1) {
                res.status(200).json({ message: "Post supprimé avec succés" });
              }
            });
        });
      } else {
        res.status(401).json({ message: "Vous n'êtes pas autorisé" });
      }
    })
    .catch(() => {
      res.status(404).json({ message: "Ce post n'existe pas" });
    });
};

exports.commentPost = (req, res) => {
  const user_id = res.locals.user.id;

  postModel
    .findOne({ where: { id: req.params.id } })
    .then((post) => {
      commentModel
        .create({
          content: req.body.content,
          userId: user_id,
          postId: post.id,
        })
        .then((comment) => {
          res.status(201).json({ message: "commentaire créé", data: comment });
        });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

exports.editCommentPost = (req, res) => {
  const user_id = res.locals.user.id;

  postModel
    .findOne({
      where: { id: req.params.id },
      include: [
        {
          model: commentModel,
          require: true,
        },
      ],
    })
    .then(() => {
      commentModel
        .findOne({
          where: { id: req.body.idComment },
        })
        .then((comment) => {
          if (comment.postId !== +req.params.id) {
            res.status(404).json({ message: "Erreur id post" });
          }
          if (comment.userId === user_id) {
            commentModel
              .update(
                {
                  content: req.body.content,
                },
                { where: { id: req.body.idComment } }
              )
              .then(() => {
                res.status(200).json({ message: "Commentaire modifié" });
              });
          } else {
            res.status(401).json({ message: "Vous n'êtes pas autorisé" });
          }
        });
    })
    .catch(() => {
      res.status(500).json({ message: "Erreur lors de la mise à jour" });
    });
};

exports.deleteCommentPost = (req, res) => {
  const user_id = res.locals.user.id;

  postModel
    .findOne({
      where: { id: req.params.id },
      include: [
        {
          model: commentModel,
          require: true,
        },
      ],
    })
    .then(() => {
      commentModel
        .findOne({
          where: { id: req.body.idComment },
        })
        .then((comment) => {
          if (comment.postId !== +req.params.id) {
            res.status(404).json({ message: "Erreur id post" });
          } else if (comment.userId === user_id) {
            commentModel
              .destroy({
                where: { id: req.body.idComment },
              })
              .then(() => {
                res.status(200).json({ message: "Commentaire supprimé" });
              });
          } else {
            res.status(401).json({ message: "Vous n'êtes pas autorisé" });
          }
        })
        .catch(() => {
          res.status(500).json({ message: "Commentaire introuvable" });
        });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};
