const JWT = require("jsonwebtoken");

 module.exports = (req, res, next) => {
  let token = req.cookies.jwt;

  if (!token) {
    res.locals.user = null;
    res.status(403).send({ message: "No token provided!" });
  }

  JWT.verify(token, process.env.TOKEN_SECRET, (error, decoded) => {
    if (error) {
      res.locals.user = null;
      res.cookie("jwt", '', { maxAge: 1 });
      res.status(401).send({ message: "Unauthorized" });
    }
    res.locals.user = decoded;
    next();
  });
};