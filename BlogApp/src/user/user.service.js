const userRepo = require("./user.repo")
const bcrypt = require("bcrypt")

const registerUser = async (fullname,username,password) => {
    const hashPassword = await bcrypt.hash(password, 10);
    return await userRepo.registerUser(fullname,username,hashPassword);
}



const userService = {
    registerUser,
    
}

module.exports = userService;