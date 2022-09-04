const userRepo = require("./user.repo")
const bcrypt = require("bcrypt")

const registerUser = async (fullname,username,password) => {
    const checkUsername = await userRepo.existUser(username);
    if(checkUsername == "" || checkUsername == null){
        const hashPassword = await bcrypt.hash(password, 10);
        return await userRepo.registerUser(fullname,username,hashPassword);
       
    }else{
        return "Username Already Exist!";
    }
   
}

const editUser = async ({fullname,username,password,user_id,loginUser}) => {
    const checkUsername = await userRepo.existUser(username);
    console.log(checkUsername)
    if(checkUsername != null){
        return "Username Already Exist!"
    }
    if(loginUser == user_id){
        const hashPassword = await bcrypt.hash(password, 10);
        await userRepo.EditUser(fullname,username,hashPassword,user_id);
        return "Update Success";
    }else{
        return "Failed Authorization";
    }
        
}



const userService = {
    registerUser,
    editUser
}

module.exports = userService;