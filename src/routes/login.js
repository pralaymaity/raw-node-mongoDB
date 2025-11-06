

const express = require("express");
const loginRoute = express.Router();

const loginController = require("../controllers/login")


loginRoute.post("/signup", loginController.signUp);
loginRoute.post("/signin", loginController.signIn);


module.exports = loginRoute;