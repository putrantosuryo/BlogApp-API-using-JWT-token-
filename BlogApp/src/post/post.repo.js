const {Post} = require ("../database/models");

//Create
const createPost = async ({title,body,image,user_id}) => {
    return await Post.create({
        title: title,
        image: image,
        body: body,
        user_id: user_id,
      });
};

//Edit 
const editPost = async ({title,body,image,post_id,user_id}) => {
    console.log("post: "+post_id +" user: "+user_id)
    return await Post.update({
        title,
        body,
        image
    },
    {
        where: {
            [Op.or]: 
              {id:  post_id ,
              user_id: user_id }
            ,
          },
          returning: true,
        }
      );
    };

//FindAll
const getAll = async (q) =>{
    
    if( q !== undefined){
        return await Post.findAll({where : {
            title : q
            // title : {
            //     [Op.like]:'%'+q+'%'
            //     }
            }
        });
    }else{
        
        return await Post.findAll();
    }
}

//Find One
const getOne = async (post_id) => {
    return await Post.findOne({
        where: {
          id: post_id,
        },
      });
};

const postRepo = {
    createPost,
    editPost,
    getAll,
    getOne
}

module.exports = postRepo;