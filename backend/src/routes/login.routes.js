const express = require('express')

const loginService = require('./../services/login.service')
const service = new loginService()
const router = express.Router()

router.post('/', async (req, res) => {
    console.log('req.boy=>', req.body)
    try {
        const body = req.body
        const login = await service.create(body)
        res.status(200).json(login)
    } catch (error) {
        console.log(error)
    }
}

)
router.get('/', async (req, res) => {
    try {
        const loginAllRegister = await service.find()
        res.json(loginAllRegister)
    } catch (error) {
        console.log(error)
    }
})
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const loginOneRegister = await service.findOne(id)
        res.json(loginOneRegister)
    } catch (error) {
        console.log(error)
    }
})

router.post('/:id', async (req, res) => {
    try {
        const { id } = req.params;
    const body = req.body;
    const loginUpdate = await service.update(id, body);
        res.json(loginUpdate)
    } catch (error) {
        console.log(error)
    }

})
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await service.delete(id);
        res.json({ message:"delete success"})
    } catch (error) {
        console.log(error)
    }
})
module.exports = router