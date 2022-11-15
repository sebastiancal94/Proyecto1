const {Pool} = require('pg')
const getUsers = (req, res) => {
    res.send('hello world in index.controllers')
}

module.exports = {getUsers}