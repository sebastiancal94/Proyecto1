const express = require('express')
const trialService = require('../services/trial.service')
const validatorHandler = require('../middleware/validator.handler')
const { createUserTrial, updateCredentialsTrial, getUserTrial } = require('../schemas/trial.schemas')
const router = express.Router()
const boom = require('@hapi/boom')
const service = new trialService()
router.post('/', validatorHandler(createUserTrial, 'body'), async (req, res,next) => {
  try {
    const body = req.body
    console.log('this is body or trialRoutes',body)
    const trial = await service.create(body)
    res.status(200).json(trial)
  } catch (error) {
    next(error)
  }
})
router.get('/', async (req, res, next) => {
  try {
    const users = await service.find();
    res.json(users);
  } catch (error) {
    next(error);
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
router.delete('/:id',validatorHandler(getUserTrial, 'params'), async (req, res, next) => {
try {
  const { id } = req.params
  const trial = await service.delete(id)
  res.status(200).json(trial)
} catch (error) {
  next(error)
}
 
})
module.exports = router
