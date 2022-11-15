const { Pool } = require('pg')
const { config } = require('../settings/config.env')
const pool = new Pool({
    host: config.DB_HOST || 'localhost',
    user: config.DB_USER || 'postgres',
    password: config.DB_PASSWORD || '123456',
    database: config.DB_NAME || 'postgres_database_name',
    port: config.DB_PORT || '5432'
})

module.exports = {pool}