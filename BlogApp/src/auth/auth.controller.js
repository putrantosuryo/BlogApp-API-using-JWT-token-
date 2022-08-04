const authService = require("./auth.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const loginUser = async (req,res) => {
    const {username,password} = req.body;
    const user = await authService.loginUser(username,password);
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if(isPasswordCorrect){
        
        const token = await jwt.sign({
            id: user.id,
            username : user.username,
        },
        process.env.JWT_SECRET_TOKEN,
        {expiresIn :"1d"}
        );
        res.json({"status" : 'login berhasil',accessToken: token});
    }else{
        res.send("Login Gagal");
    }
}

const authController = {
    loginUser
}

module.exports = authController;