const userService = require("./user.service");
const bcrypt = require("bcrypt")

const registerUser = async (req,res) => {
    const {fullname,username,password} = req.body;
    const newUser = await userService.registerUser(fullname,username,password);
    res.json(newUser);
}

const loginUser = async (req,res) => {
    const {username,password} = req.body;
    const user = await userService.loginUser(username,password);
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if(isPasswordCorrect){
        res.send("Login Berhasil")
    }else{
        res.send("Login Gagal")
    }
}

const userController = {
    registerUser,
    loginUser
}
 
module.exports = userController;