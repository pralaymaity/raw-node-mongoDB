const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  //checking, if the user has token or not
  try {
    const token = req.headers.authorization.replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //console.log(decoded);

    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }

    req.loginData = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Authentification Failed",
    });
  }
};

module.exports = authenticate;
