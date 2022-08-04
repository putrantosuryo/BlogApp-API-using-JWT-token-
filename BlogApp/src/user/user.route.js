const express = require('express');
const userController = require('./user.controller');
const userRouter = express.Router();

//API Register
userRouter.post("/blogApp.com/register",userController.registerUser);




module.exports = userRouter;