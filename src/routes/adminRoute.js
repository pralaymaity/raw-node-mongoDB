
const express = require("express");
const adminRoute = express.Router();
const adminController = require("../controllers/adminController");
const upload = require("../middleware/upload");
const authenticate = require("../middleware/auth");


adminRoute.post("/admin-login", adminController.adminlogin);
adminRoute.post("/users",authenticate, upload.single("image"), adminController.cerateUser);
adminRoute.put("/update-user/:id",authenticate, upload.single("image"), adminController.updateSingleUser);
adminRoute.post("/user-login", adminController.adminlogin);


module.exports = adminRoute;
