const userModel = require("../models").User;


exports.signUp = (req, res) => {
  const { name, email, password } = req.body;
  
  userModel.create({
    name,
    email,
    password
  }).then(user => {
    res.status(201).json({
      status: 1,
      message: "Utilisateur créé avec succes",
      data: user
    })
  })
}