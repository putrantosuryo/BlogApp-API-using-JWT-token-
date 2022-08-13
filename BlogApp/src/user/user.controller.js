const userService = require("./user.service");
const bcrypt = require("bcrypt")

const registerUser = async (req,res) => {
    const {fullname,username,password} = req.body;
    const newUser = await userService.registerUser(fullname,username,password);
    res.json(newUser);
};

const editUser = async (req,res) => {
    const {fullname,username,password} = req.body;
    const {user_id} = req.params;
    const authUser = req.auth;
    const loginUser = authUser.id;
    const updateUser = {
        fullname,
        username,
        password,
        user_id,
        loginUser
    };
    try {
            const editUser = await userService.editUser(updateUser);
            res.send(editUser);         
    } catch (error) {
        res.json(error)
    }
}


const userController = {
    registerUser,
    editUser
}
 
module.exports = userController;