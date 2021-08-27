const userModel = require("../models").User;
const bcrypt = require("bcrypt");
const Sequelize = require("sequelize");
const JWT = require("jsonwebtoken");

const Op = Sequelize.Op;

// Enregistrement d'un utilisateur
exports.signUp = (req, res) => {
  const { username, email, password } = req.body;
  // Vérification si l'utilisateur est deja enregistré avec cet email
  userModel
    .findOne({
      where: {
        email: {
          [Op.eq]: email,
        },
      },
    })
    .then((user) => {
      if (user) {
        res.status(500).json({
          status: 0,
          message: "Cet adresse email est déjà enregistré",
        });
      } else {
        // Création de l'utilisateur
        userModel
          .create({
            username,
            email,
            password: bcrypt.hashSync(password, 10),
          })
          .then(() => {
            res.status(201).json({
              status: 1,
              message: "Utilisateur créé avec succes",
            });
          })
          .catch((err) => {
            res.status(500).json({ error: err });
          });
      }
    });
};

// Connexion de l'utilisateur
exports.signIn = (req, res) => {

  userModel.findOne({
    where: {
      email: {
        [Op.eq]: req.body.email
      }
    }
  }).then(user => {
    if (user) {
      let password = req.body.password;
      if(bcrypt.compareSync(password, user.password)) {
        // génération du token
        let token = JWT.sign({
          id: user.id
        }, process.env.TOKEN_SECRET, {
          expiresIn: process.env.JWT_EXPIRES_IN
        })
        res.status(200).json({
          status: 1,
          message: "Vous êtes connecté",
          token: token
        })
      } else {
        res.status(500).json({
          status: 0,
          message: "Mot de passe incorrect"
        })
      }
    } else {
      res.status(500).json({
        status:0,
        message: "Cet email n'est pas enregistré"
      })
    }
  })
}
