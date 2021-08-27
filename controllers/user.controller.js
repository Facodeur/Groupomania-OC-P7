const userModel = require("../models").User;

// Récupération info utilisateur connecté
exports.userInfo = (req, res) => {
  let student_id = req.data.id;

  userModel.findByPk(student_id)
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
