const { Router } = require('express')
const router = Router()
const {getUsers,createUser,getUserById,deleteUser,updateUser}=require('../controllers/index.controllers')
router.get('/', (req, res) => {
    res.status(201).json({ message: "hola esta es la ruta principal" })
})
router.get('/users', getUsers)
router.get('/users/:id', getUserById)
router.post('/users/create', createUser)
router.post('/users/:id', updateUser)
router.delete('/users/:id/',deleteUser)
module.exports = router
