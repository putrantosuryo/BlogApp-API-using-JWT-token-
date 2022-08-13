const postRepo = require("./post.repo");


const createPost = async ({title,body,image,user_id}) => {
    return await postRepo.createPost({title,body,image,user_id});
};

const editPost = async ({title,body,image,post_id,authUser}) => {
    const checkPost = await getOne(post_id);
    if(checkPost.user_id == authUser.id){
         await postRepo.editPost({title,body,image,post_id});
         return "Update Success" ;  
    }else{
        return "Failed Authorization"; 
    }
   
}

const getAll = async (tempQuery) => {
    return await postRepo.getAll(tempQuery);
}

const getOne = async (post_id) => {
    return await postRepo.getOne(post_id);
}

const postService = {
    createPost,
    editPost,
    getAll,
    getOne
};

module.exports = postService;