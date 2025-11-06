const jwt = require("jsonwebtoken");


const authenticate = (req, res, next) => {
  //console.log(req);
  
  try {
    const token = req.headers.authorization.replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.loginData = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Authentification Failed"
    });
  }
};

module.exports = authenticate;