const { Router } = require('express')
const router = Router()
const {getUsers,createUser,getUserById,deleteUser,updateUser}=require('../controllers/index.controllers')

router.get('/users', getUsers)
router.get('/users/:userId', getUserById)
router.get('/users/create', createUser)
router.get('/users/:id/update', updateUser)
router.get('/users/:id/',deleteUser)
module.exports = router
