const { defaults } = require('joi')
const Joi = require('joi')
const id = Joi.number()
const username = Joi.string().min(3).max(9)
const password = Joi.string().min(3)
const name = Joi.string().min(15)
const email = Joi.string().min(10).max(30)
const address = Joi.object()
const website = Joi.string()
const company = Joi.object()
const phone = Joi.string().min(10).max(15)

const createUserTrial = Joi.object({
  name: name.default("pending-update"),
	email: email.default("pending-update"),
  address: address.default({ geo:{}}),
	phone: phone.default("pending-update"),
	website: website.default("pending-update"),
	company: company.default({}),
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
