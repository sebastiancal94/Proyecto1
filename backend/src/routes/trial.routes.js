const express = require('express')
const boom = require('@hapi/boom')
const trialService = require('../services/trial.service')
const validatorHandler = require('../middleware/validator.handler')
const { createUserTrial, updateCredentialsTrial, getUserTrial } = require('../schemas/trial.schemas')
const service = new trialService()
const router = express.Router()

router.post('/', validatorHandler(createUserTrial, 'body'), async (req, res) => {
  try {
    const body = req.body
    const trial = await service.create(body)
    res.status(200).json(trial)
  } catch (error) {
    throw boom.notFound('data is not available, change data in fields')
  }
})
router.get('/', async (req, res) => {
  try {
    const trialAllRegister = await service.find()
    res.json(trialAllRegister)
  } catch (error) {
    
    throw boom.notAcceptable('User or password is not available')
  }
})
router.get('/:id', validatorHandler(getUserTrial, 'params'), async (req, res) => {
  try {
    const { id } = req.params
    const trialOneRegister = await service.findOne(id)
    res.json(trialOneRegister)
  } catch (error) {
    throw boom.notFound('User or password is not available')
  }
})

router.patch('/:id', validatorHandler(getUserTrial, 'params'), validatorHandler(updateCredentialsTrial, 'body'), async (req, res) => {
  try {
    const { id } = req.params
    const body = req.body
    const trialUpdate = await service.update(id, body)
    res.json(trialUpdate)
  } catch (error) {
    throw boom.badData('invalid data for update')
  }
})
router.delete('/:id', async (req, res) => {
try {
  const { id } = req.params
  await service.delete(id)
  return "ok"
} catch (error) {
  return rta
}
 
})
module.exports = router
