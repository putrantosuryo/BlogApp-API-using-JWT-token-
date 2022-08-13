const { body } = require("express-validator");

const loginValidation = [
  body("username").isString().notEmpty(),
  body("password").isString().notEmpty(),
];

module.exports = {
  loginValidation,
};
