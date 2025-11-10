

const express = require("express");
const adminRoute = express.Router();
const adminController = require("../controllers/adminController")
const authenticate = require("../middleware/auth")


adminRoute.post("/admin-login", adminController.adminlogin);
adminRoute.post("/users", adminController.cerateUser);
adminRoute.post("/user-login", adminController.adminlogin);


module.exports = adminRoute;
