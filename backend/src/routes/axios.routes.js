const express =require('express')
const router = express.Router()
const axios = require('axios')

router.get('/', async (req, res) => {
    const data = await axios.get('https://jsonplaceholder.typicode.com/users')
    const User = data.data
    User.map(element => {
        console.log(element.id)
    })
    res.json(User)
}
)
module.exports = router