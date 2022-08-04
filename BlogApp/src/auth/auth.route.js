const express = require('express');
const authController = require('./auth.controller');
const authRouter = express.Router();


authRouter.post("/blogApp.com/login", authController.loginUser);

module.exports = authRouter;
