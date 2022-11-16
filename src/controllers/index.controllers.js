const { pool } = require('../database/postgres.connection')
const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users')
    res.status(200).json(response.rows)
}

const getUserById = async (req, res) => {
    const id  = req.params.id
    console.log(id)
    const response = await pool.query(`SELECT * FROM users WHERE id = ${id}`)
    res.status(201).json(response.rows)
}
const createUser = async (req, res) => {
    const { name, userName,email, address_relation, geo_relation, phone, website} = req.body
    // const response = await pool.query(`INSERT INTO users (name, userName,email, address_relation, geo_relation, phone, website) VALUES (${name},${userName},${email},${address_relation},${geo_relation},${phone},${website})`)
    res.status(200).json(response.rows)
}
const updateUser = async (req, res) => {
    const id = req.params.id
    const { name, userName, address_relation, geo_relation, phone, website, company } = req.body
    const response = await pool.query(`UPDATE users SET name=${name}, userName=${userName}, address_relation=${address_relation}, geo_relation=${geo_relation}, phone=${phone}, website=${website}, company=${company} WHERE id=${id}`)
    res.status(200).json(response.rows)
}
const deleteUser = async (req, res) => {
    const id  = req.params.id
    console.log(id)
    const response = await pool.query(`DELETE FROM users WHERE id = ${id}`)
    res.status(201).json({
        message: `User ${id} deleted successfully`
    })
}


module.exports = { getUsers,createUser,getUserById,deleteUser,updateUser }
