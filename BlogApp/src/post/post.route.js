const express = require('express');
const tokenVerification = require('../middleware/token.verification');
const postController = require('./post.controller');
const postRouter = express.Router();

//Create Post
postRouter.post("/blogApp.com/createPost",tokenVerification,postController.createPost);

//Edit Post
postRouter.put("/blogApp.com/editPost/:post_id",tokenVerification,postController.editPost);

//get All 
postRouter.get("/blogApp.com",postController.getAll);

//get One
postRouter.get("/blogApp.com/:post_id",postController.getOne);

module.exports = postRouter;