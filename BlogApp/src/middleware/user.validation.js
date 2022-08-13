const { body } = require("express-validator");

const userValidation = [
    body("fullname").isString().notEmpty(),
    body("username").isString().notEmpty(),
    body("password").isString().notEmpty().isStrongPassword(),
];

module.exports = {
    userValidation,
};
