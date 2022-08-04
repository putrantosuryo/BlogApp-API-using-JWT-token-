const {User} = require ("../database/models");

//Register 
const registerUser = async (fullname,username,password) => {
    return await User.create ({
        fullname,
        username,
        password
    });
};



const userRepo = {
    registerUser
};

module.exports=userRepo;