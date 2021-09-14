const userModel = require("../models").User;
const bcrypt = require("bcrypt");
const Sequelize = require("sequelize");
const JWT = require("jsonwebtoken");
const { signupErrors } = require("../utils/errors.validate");
const expire = 24 * 60 * 60 * 1000;

const Op = Sequelize.Op;

// Enregistrement d'un utilisateur
exports.signUp = (req, res) => {
  const { username, email, password } = req.body;
  // Vérification si l'utilisateur est deja enregistré avec cet email
  userModel
    .findOne({ where: { email: { [Op.eq]: email } } })
    .then((user) => {
      if (user) {
        res.status(200).json({
          errorEmail: "Cet adresse email est déjà enregistré",
        });
      } else {
        // Création de l'utilisateur
        userModel
          .create({ username, email, password })
          .then(() => {
            res.status(201).json({
              message: "Inscription validé !",
            });
          })
          .catch((err) => {
            const errors = signupErrors(err)
            res.status(200).send({ errors })
          });
      }
    })
    .catch((err) => res.status(200).json({ error: err }));
};

// Connexion de l'utilisateur
exports.signIn = (req, res) => {
  userModel
    .findOne({ where: { email: { [Op.eq]: req.body.email } } })
    .then((user) => {
      if (user) {
        let password = req.body.password;
        if (bcrypt.compareSync(password, user.password)) {
          // génération du token
          let token = JWT.sign({ id: user.id }, process.env.TOKEN_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
          });
          
          res.cookie('jwt', token, { httpOnly: true, sameSite: 'lax', maxAge: expire })
          res.status(200).send({  message: "Vous êtes connecté" });

        } else {
          res.status(200).send({
            passwordError: "Mot de passe incorrect",
          });
        }
      } else {
        res.status(200).send({
          emailError: "Email incorrect",
        });
      }
    });
};

exports.logout = (req, res) => {
  res.cookie("jwt", '', { maxAge: 1 });
  res.redirect("/");
};