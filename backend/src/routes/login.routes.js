const express = require('express')
const loginService = require('./../services/login.service')
const service = new loginService()
const router = express.Router()
router.get('/', async (req, res) => {
    try {
        const login = await service.find()
        res.json(login)
    } catch (error) {
        console.log(error)
    }
})
router.get('/:id', async (req, res) => {

    res.status(200).json({message:"findOneUser login router"})
})
router.post('/', async (req, res) => {

    res.status(200).json({message:"create login router"})
}
)
router.patch('/:id', async (req, res) => {
    res.status(200).json({message:"update login router"})
})
router.delete('/:id', async (req, res) => {
    res.status(200).json({message:"Delete login router"})
})
module.exports = router