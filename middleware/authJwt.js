const JWT = require("jsonwebtoken");

 module.exports = (req, res, next) => {
  let token = req.headers["authorization"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }

  JWT.verify(token, process.env.TOKEN_SECRET, (error, decoded) => {
    if (error) {
      return res.status(401).send({
        message: "Unauthorized",
      });
    }
    req.data = decoded;
    next();
  });
};