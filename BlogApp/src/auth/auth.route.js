const express = require('express');
const authController = require('./auth.controller');
const authRouter = express.Router();
const { loginValidation } = require("../middleware/auth.validation");
const { validate } = require("../middleware/validation");

//API Login
/**
 * @swagger
 * /blogApp.com/login:
 *  post:
 *    tags: 
 *      - authorization
 *    summary: API login
 *    description: API to login to get JWT token
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *                example: usernamesuryo
 *              password:
 *                type: string
 *                example: Password@123!
 *    responses:
 *      '200':
 *        description: Login sukses
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                  example: login berhasil
 *                accessToken:
 *                  type: string
 *                  example: aiuwhrp2h3p48uy24184auewfpa8y34pr8ujrp8u2394p812ejuapwf823r89q23y[293u4[23u4ihr9283y4q02783ywfjaidhjfoaw
 *                username:
 *                  type: string
 *                  example: usernamesuryo
 *      '400':
 *        description: Login gagal
 */
authRouter.post("/blogApp.com/login",loginValidation,validate, authController.loginUser);

module.exports = authRouter;
