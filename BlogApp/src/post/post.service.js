const postRepo = require("./post.repo")

const createPost = async ({title,body,image,user_id}) => {
    return await postRepo.createPost({title,body,image,user_id});
};

const editPost = async ({title,body,image,post_id}) => {
    return await postRepo.editPost({title,body,image,post_id});
}

const getAll = async (q) => {
    return await postRepo.getAll(q);
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