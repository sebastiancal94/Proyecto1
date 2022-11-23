const Joi = require('joi')
const id = Joi.number()
const username = Joi.string().min(3).max(9)
const password = Joi.string().min(3)
const createUserLogin = Joi.object({
  username: username.required(),
  password: password.required()
})
const updateCredentialsLogin = Joi.object({
    username: username.required(),
    password: password.required()
})
const getUserLogin = Joi.object({
    id: id.required()
})

module.exports = { createUserLogin, updateCredentialsLogin, getUserLogin }
