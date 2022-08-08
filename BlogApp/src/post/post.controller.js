const postService = require("./post.service");

const createPost = async (req,res) => {
    const {title,body,image} = req.body;
    const authUser = req.auth;

    const newPost = {
        title,
        body,
        image,
        user_id : authUser.id
    }
    try {
        const createPost = await postService.createPost(newPost);
        res.json(createPost);
    } catch (error) {
        res.send(error);
    }
   
};

const editPost = async (req,res) => {
    const {title,body,image} = req.body;
    const {post_id} = req.params;
    const authUser = req.auth;
    const user_id = authUser.id
    console.log(authUser.id)
    const post = {
        title,
        body,
        image,
        post_id,
        user_id
    };
    try {
      const checkPost = await postService.getOne(post_id);
    
    //   if(checkPost.user_id == authUser.id){
        const editPost = await postService.editPost(post);
        return res.send(editPost);
    //     res.send("Update Success");  
    //   }else{
    //     res.send("Failed Authorization"); 
    //   }
     
    } catch (error) {
        res.json(error)
    }
};

const getAll = async (req,res) => {
    const { q } = req.query;
    try {
        const posts = await postService.getAll(q);
        res.json(posts);
    } catch (error) {
        res.json(error)
    }
    
};

const getOne = async (req,res) => {
    const {post_id} = req.params;
    try {
        const post = await postService.getOne(post_id);
        res.json(post);
    } catch (error) {
        res.json(error)
    }
    
}

const postController = {
    createPost,
    editPost,
    getAll,
    getOne
};

module.exports = postController;