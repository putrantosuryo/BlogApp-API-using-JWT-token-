const userService = require("./user.service");
const bcrypt = require("bcrypt")

const registerUser = async (req,res) => {
    const {fullname,username,password} = req.body;
    const newUser = await userService.registerUser(fullname,username,password);
    res.json(newUser);
}


const userController = {
    registerUser,
    
}
 
module.exports = userController;