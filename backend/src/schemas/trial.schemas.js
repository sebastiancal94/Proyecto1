const Joi = require('joi')
const id = Joi.number()
const username = Joi.string().min(3).max(9)
const password = Joi.string().min(3)
const createUserTrial = Joi.object({
  username: username.required(),
  password: password.required()
})
const updateCredentialsTrial = Joi.object({
    username: username.required(),
    password: password.required()
})
const getUserTrial = Joi.object({
    id: id.required()
})
module.exports = { createUserTrial, updateCredentialsTrial, getUserTrial }
