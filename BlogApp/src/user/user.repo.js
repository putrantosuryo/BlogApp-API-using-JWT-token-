const {User} = require ("../database/models");

//Register 
const registerUser = async (fullname,username,password) => {
    return await User.create ({
        fullname,
        username,
        password
    });
};

//Login
const loginUser = async (username,password) => {
    return await User.findOne({
        where: {
            // [Op.and]: [
            //     {username},
            //     {password}
            // ]
            username
        }
    });
}

const userRepo = {
    registerUser,
    loginUser
};

module.exports=userRepo;