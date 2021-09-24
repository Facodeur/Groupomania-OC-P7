const userModel = require("../models").User;

exports.getAllUsers = (req, res) => {
  userModel
    .findAll({ 
      attributes: { exclude: ["password"]} 
    })
    .then((users) => {
      res.status(200).json(users);
    })
    .catch(err => res.status(500).json(err))
}

// Récupération infos utilisateur connecté
exports.userInfo = (req, res) => {
  const user_id = res.locals.user.id;
  
  userModel
    .findOne({ 
      where: { id: user_id },
      attributes: { exclude: ["password"]}
    })
    .then((user) => {
      res.status(200).json(user)
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
            res.cookie("jwt", '', { maxAge: 1 })
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