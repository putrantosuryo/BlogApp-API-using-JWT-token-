const authRepo = require("./auth.repo");

const loginUser = async (username,password) => {
    return await authRepo.loginUser(username,password);
}

const authService = {
    loginUser,
};

module.exports = authService;