const { body } = require("express-validator");

const postValidation = [
    body("title").isString().notEmpty(),
    body("body").isString().notEmpty(),
    body("image").isString().notEmpty(),
];

module.exports = {
    postValidation,
};