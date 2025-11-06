const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/user");
const authenticate = require("../middleware/auth");

userRouter.post("/users",authenticate, userController.createUser);
userRouter.get("/users",authenticate, userController.getAllUsers);
userRouter.get("/users/:id",authenticate, userController.getSingleUser);
userRouter.put("/users/:id",authenticate, userController.updateSingleUser);
userRouter.put("/users",authenticate, userController.updateAllUser);
userRouter.delete("/users/:id",authenticate, userController.deleteSingleUser);
userRouter.delete("/users",authenticate, userController.deleteAllUser);

module.exports = userRouter;