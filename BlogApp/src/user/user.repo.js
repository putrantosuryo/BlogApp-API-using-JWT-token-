const {User} = require ("../database/models");

//Register

const registerUser = async (fullname,username,password) => {
    return await User.create ({
        fullname,
        username,
        password
    });
};

//EditUser
const EditUser = async (fullname,username,password,user_id) => {
    return await User.update ({
        fullname,
        username,
        password
    },
    {
        where: 
          {
            id : user_id,
          },
          returning: true,
        }
    )
}

//GetUser
const existUser = async (username) => {
    return await User.findOne({
        where: {
            username: username,
        },
      });
    };

const userRepo = {
    registerUser,
    EditUser,
    existUser
};

module.exports=userRepo;