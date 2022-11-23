const Joi = require("joi");
const username = Joi.string().min(3).max(9);
const password = Joi.string().min(3)
const createUserLogin = Joi.object({
    username: username.required(),
    password: password.required()
})
module.exports = {createUserLogin}