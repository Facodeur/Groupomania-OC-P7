const userModel = require("../models").User;

// Récupération infos utilisateur connecté
exports.userInfo = (req, res) => {
  const user_id = req.data.id;

  userModel
    .findByPk(user_id)
    .then((user) => {
      if (user) {
        res.status(200).json({
          status: 1,
          message: "Infos profil",
          data: user,
        });
      }
    })
    .catch((err) => console.log(err));
};

// Mise à jour infos utilisateur
exports.userUpdate = (req, res) => {
  const userIdConnected = req.data.id;
  const { username, email, password } = req.body;

  userModel
    .findOne({ where: { id: req.params.id } })
    .then((user) => {
      if (user.id === userIdConnected) {
        userModel
          .update(
            { username, email, password },
            { returning: true, where: { id: req.params.id } }
          )
          .then(() => {
            res.status(200).json({
              status: 1,
              message: "Information mise à jour",
            });
          })
          .catch((err) => res.status(500).json({ message: err.message }));
      } else {
        res.status(401).json({ message: "Vous n'êtes pas autorisé" });
      }
    })
    .catch((err) => {
      res.status(500).json({
        status: 0,
        message: "Erreur lors de la mise à jour",
        data: err,
      });
    });
};

// Supprimer l'utilisateur avec son id
exports.userDelete = (req, res) => {
  const userIdConnected = req.data.id;

  userModel
    .findOne({ where: { id: req.params.id } })
    .then((user) => {
      if (user.id === userIdConnected) {
        userModel
          .destroy({ where: { id: req.params.id } })
          .then(() => {
            res.status(200).json({ status: 1, message: "Compte supprimé avec succes" });
          });
      } else {
        res.status(401).json({ message: "Vous n'êtes pas autorisé" });
      }
    })
    .catch(() => {
      res.status(500).json({ status: 0, message: "Utilisateur non trouvé" });
    });
};