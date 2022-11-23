const express = require('express')
const loginService = require('./../services/login.service')
const validatorHandler = require('./../middleware/validator.handler')
const { createUserLogin, updateCredentialsLogin, getUserLogin } = require('./../schemas/login.schemas')
const service = new loginService()
const router = express.Router()

router.post('/', validatorHandler(createUserLogin, 'body'), async (req, res) => {
  try {
    const body = req.body
    const login = await service.create(body)
    res.status(200).json(login)
  } catch (error) {
    throw boom.notFound('data is not available, change data in fields')
  }
})
router.get('/', async (req, res) => {
  try {
    const loginAllRegister = await service.find()
    res.json(loginAllRegister)
  } catch (error) {
    throw boom.notAcceptable('User or password is not available')
  }
})
router.get('/:id', validatorHandler(getUserLogin, 'params'), async (req, res) => {
  try {
    const { id } = req.params
    const loginOneRegister = await service.findOne(id)
    res.json(loginOneRegister)
  } catch (error) {
    throw boom.notFound('User or password is not available')
  }
})

router.patch('/:id', validatorHandler(getUserLogin, 'params'), validatorHandler(updateCredentialsLogin, 'body'), async (req, res) => {
  try {
    const { id } = req.params
    const body = req.body
    const loginUpdate = await service.update(id, body)
    res.json(loginUpdate)
  } catch (error) {
    throw boom.badData('invalid data for update')
  }
})
router.delete('/:id', validatorHandler(getUserLogin, 'params'), async (req, res) => {
  try {
    const { id } = req.params
    await service.delete(id)
    return res.json({ message: 'delete success' })
  } catch (error) {
    throw boom.conflict('impossible delete, unauthorized or not found data')
  }
})
module.exports = router
