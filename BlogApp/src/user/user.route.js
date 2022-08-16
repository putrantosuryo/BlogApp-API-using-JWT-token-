const express = require('express');
const userController = require('./user.controller');
const { userValidation } = require("../middleware/user.validation");
const { validate } = require("../middleware/validation");
const tokenVerification = require('../middleware/token.verification');
const userRouter = express.Router();

//API Register User
/**
 * @swagger
 * /blogApp.com/register:
 *  post:
 *    tags:
 *      - user
 *    summary: API to create user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              fullname:
 *                type: string
 *                example: suryoklalala
 *              username:
 *                type: string
 *                example: usernamesuryo
 *              password:
 *                type: string
 *                example: Password@123!
 *    responses:
 *
 *      '200':
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: integer
 *                fullname:
 *                  type: string
 *                username:
 *                  type: string
 *                password:
 *                  type: string
 *                updatedAt:
 *                  type: string
 *                createdAt:
 *                  type: string
 */ 
userRouter.post("/blogApp.com/register",userValidation,validate,userController.registerUser);

//API Edit username User
/**
 * @swagger
 * /blogApp.com/user/{user_id}:
 *  put:
 *    security:
 *      - bearerAuth : []
 *    tags:
 *      - user
 *    summary: API to edit fullname,username,password
 *    parameters:
 *      - in: path
 *        name: user_id
 *        required: true
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              fullname:
 *                type: string
 *                example: suryo
 *              username:
 *                type: string
 *                example: usernamesuryo
 *              password:
 *                type: string
 *                example: Password@123!
 *    responses:
 *      '200':
 *        description: Update Success / Username Already Exist!
 */ 
userRouter.put("/blogApp.com/user/:user_id",userValidation,validate,tokenVerification,userController.editUser);

module.exports = userRouter;