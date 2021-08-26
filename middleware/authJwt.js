const JWT = require("jsonwebtoken");

let validateToken = (req, res, next) => {
  let tokenValue = req.headers["authorisation"];

  if (tokenValue) {
    JWT.verify(tokenValue, process.env.TOKEN_SECRET, (error, data) => {
      if (error) {
        return res.status(500).json({
          status: 0,
          message: "Le token n'est pas valide",
        });
      } else {
        req.data = data;
        next();
      }
    });
  } else {
    // pas de token dans le headers
    return res.status(404).json({
      status: 0,
      message: "Token demandé",
    });
  }
};

module.exports = {
  checkToken: validateToken
};
