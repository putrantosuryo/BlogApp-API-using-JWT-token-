const express = require('express');
const { postValidation } = require('../middleware/post.validation');
const tokenVerification = require('../middleware/token.verification');
const { validate } = require('../middleware/validation');
const postController = require('./post.controller');
const postRouter = express.Router();

//Create Post
/**
 * @swagger
 * /blogApp.com/createPost:
 *  post:
 *    tags:
 *      - post
 *    security:
 *      - bearerAuth : []
 *    summary: API to create post with for each user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              title:
 *                type: string
 *                example: judulInput
 *              body:
 *                type: string
 *                example: bodyInput
 *              image:
 *                type: string
 *                example: imageInput
 *    responses:
 *      '200':
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: integer
 *                title:
 *                  type: string
 *                body:
 *                  type: string
 *                image:
 *                  type: string
 *                user_id:
 *                  type: integer
 *                updatedAt:
 *                  type: string
 *                createdAt:
 *                  type: string
 */
postRouter.post("/blogApp.com/createPost",postValidation,validate,tokenVerification,postController.createPost);

//Edit Post
/**
 * @swagger
 * /blogApp.com/editPost/{post_id}:
 *  put:
 *    tags:
 *      - post
 *    security:
 *      - bearerAuth : []
 *    summary: API to edit post for each user
 *    parameters:
 *      - in: path
 *        name: post_id
 *        required: true
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              title:
 *                type: string
 *                example: judulEdit
 *              body:
 *                type: string
 *                example: bodyEdit
 *              image:
 *                type: string
 *                example: imageEdit
 *    responses:
 *      '200':
 *        description: Update Success 
 */
postRouter.put("/blogApp.com/editPost/:post_id",postValidation,validate,tokenVerification,postController.editPost);

//get All post
/**
 * @swagger
 * /blogApp.com/post:
 *  get:
 *    tags:
 *      - post
 *    summary: API to get all post item (Pagination require limit and page)
 *    parameters:
 *      - in: query
 *        name: limit
 *        required: false
 *        schema:
 *          type: integer
 *        description : how many data that show in one page
 *      - in: query
 *        name: page
 *        required: false
 *        schema:
 *          type: integer
 *        description : which page we wanna see
 *      - in: query
 *        name: writer
 *        required: false
 *        schema:
 *          type: integer
 *        description : to get spesific post with user id
 *      - in: query
 *        name: title
 *        required: false
 *        schema:
 *          type: string
 *        description : to get spesific post with title
 *      - in: query
 *        name: order
 *        required: false
 *        schema:
 *          type: string
 *        description : ordering Query can be 'ASC' or 'DESC'
 *    description: API to get all post item
 *    requestBody:
 *    responses:
 *      '200':
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: integer
 *                title:
 *                  type: string
 *                image:
 *                  type: string
 *                body:
 *                  type: string
 *                user_id:
 *                  type: string
 *                updatedAt:
 *                  type: string
 *                createdAt:
 *                  type: string
 */ 
postRouter.get("/blogApp.com/post",postController.getAll);

//Get post detail
/**
 * @swagger
 * /blogApp.com/post/{post_id}:
 *  get:
 *    tags:
 *      - post
 *    summary: API to get detail post with post id
 *    description: API to get detail post with post id
 *    parameters:
 *      - in: path
 *        name: post_id
 *        required: true
 *    requestBody:
 *    responses:
 *      '200':
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: integer
 *                title:
 *                  type: string
 *                image:
 *                  type: string
 *                body:
 *                  type: string
 *                user_id:
 *                  type: string
 *                updatedAt:
 *                  type: string
 *                createdAt:
 *                  type: string
 */ 
postRouter.get("/blogApp.com/post/:post_id",postController.getOne);

// postRouter.get(
//     "/blogApp.com/post",
//     corsValidate,
//     postController.getAll
//   );

module.exports = postRouter;