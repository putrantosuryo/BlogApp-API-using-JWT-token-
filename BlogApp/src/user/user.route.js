const express = require('express');
const userController = require('./user.controller');
const userRouter = express.Router();

//API Register
userRouter.post("/blogApp.com/register",userController.registerUser);

userRouter.post("/blogApp.com/login",userController.loginUser);


module.exports = userRouter;