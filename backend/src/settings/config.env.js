require('dotenv').config()
const config = {
  ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST,
  DB_NAME: process.env.DB_NAME,
  DB_PORT: process.env.DB_PORT,
  DB_DIALECT: process.env.DB_DIALECT,
  POOL_CONFIG_MAX: process.env.POOL_CONFIG_MAX,
  POOL_CONFIG_MIN: process.env.POOL_CONFIG_MIN,
  POOL_CONFIG_ACQUIRE: process.env.POOL_CONFIG_ACQUIRE,
  POOL_CONFIG_IDLE: process.env.POOL_CONFIG_IDLE,

}
module.exports = { config }