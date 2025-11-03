const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/user");

userRouter.post("/users", userController.createUser);
userRouter.get("/users", userController.getAllUsers);
userRouter.get("/users/:id", userController.getSingleUser);
userRouter.put("/users/:id", userController.updateSingleUser);
userRouter.put("/users", userController.updateAllUser);
userRouter.delete("/users/:id", userController.deleteSingleUser);
userRouter.delete("/users", userController.deleteAllUser);

module.exports = userRouter;