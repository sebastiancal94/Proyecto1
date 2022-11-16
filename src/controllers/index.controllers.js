const { pool } = require('../database/postgres.connection')
const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users')
    res.status(200).json(response.rows)
}

const gerOneUser = async (req, res) => {
    const {id} = req.body
    const response = await pool.query(`SELECT userName, email FROM users WHERE id=${id}`)
    res.status(200).json(response.rows)
}
const createUser = async (req, res) => {
    const {name,email} = req.body
    const response = await pool.query(`INSERT INTO users () VALUES (${name},${email})`)
    res.status(200).json(response.rows)
}

module.exports = { getUsers,createUser }
