const express = require('express')
const { models } = require('../database/database')
const router = express.Router()
router.get('/', async (req, res) => {
    
    res.status(200).json({message:"findAll users router"})
})
router.get('/:id', async (req, res) => {
    const response = await models.User.findOne(id)
    res.status(200).json({message:"findOneUser users router"})
})

router.post('/', async (req, res) => {
    // const response = await models.User.create(body)
    console.log(req.body)
    res.status(200).json({message:"create users router"})
}
)

router.patch('/:id', async (req, res) => {
    const response = await models.User.create(body)
    res.status(200).json({message:"update users router"})
})

router.delete('/:id', async (req, res) => {
    const response = await models.User.create(body)
    res.status(200).json({message:"Delete users router"})
})
module.exports = router
