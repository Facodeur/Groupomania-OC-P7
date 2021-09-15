const userModel = require("../models").User;

// Récupération infos utilisateur connecté
exports.userInfo = (req, res) => {
  const user_id = res.locals.user.id;
  
  userModel
    .findByPk(user_id)
    .then((user) => {
      if (user) {
        res.status(200).json( {
          id: user.id,
          username: user.username,
          email: user.email,
          createAt: user.createdAt});
      }
    })
    .catch((err) => console.log(err));
};

// Mise à jour infos utilisateur
exports.userUpdate = (req, res) => {
  const userIdConnected = res.locals.user.id;
  const { username } = req.body;

  userModel
    .findOne({ where: { id: req.params.id } })
    .then((user) => {
      if (user.id === userIdConnected) {
        userModel
          .update(
            { username },
            { returning: true, where: { id: req.params.id } }
          )
          .then(() => {
            res.status(200).json({ message: "Information mise à jour" });
          })
          .catch((err) => res.status(500).json({ message: err.message }));
      } else {
        res.status(401).json({ message: "Vous n'êtes pas autorisé" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Utilisateur non trouvé" });
    });
};

// Supprimer l'utilisateur avec son id
exports.userDelete = (req, res) => {
  const userIdConnected = res.locals.user.id;

  userModel
    .findOne({ where: { id: req.params.id } })
    .then((user) => {
      if (user.id === userIdConnected) {
        userModel
          .destroy({ where: { id: req.params.id } })
          .then(() => {
            res.status(200).json({ message: "Compte supprimé avec succes" });
          });
      } else {
        res.status(401).json({ message: "Vous n'êtes pas autorisé" });
      }
    })
    .catch(() => {
      res.status(500).json({ message: "Utilisateur non trouvé" });
    });
};