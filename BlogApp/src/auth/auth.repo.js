const {User} = require ("../database/models");

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
};

const authRepo = {
    loginUser,
}

module.exports = authRepo;