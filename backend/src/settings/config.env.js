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
  API_KEY : process.env.API_KEY ,
  POOL_CONFIG_MAX: process.env.POOL_CONFIG_MAX,
  POOL_CONFIG_MIN: process.env.POOL_CONFIG_MIN,
  POOL_CONFIG_ACQUIRE: process.env.POOL_CONFIG_ACQUIRE,
  POOL_CONFIG_IDLE: process.env.POOL_CONFIG_IDLE,
  EMAIL_USERS: process.env.EMAIL_USERS,
  EMAIL_PASSWORDS: process.env.EMAIL_PASSWORD,
  EMAIL_PORT: process.env.EMAIL_PORT  HOST:process.env.HOST_EMAIL,
  PHAT: process.env.PATH_EMAIL,
  PORT2: process.env.PORT_EMAIL,
  EMAIL: process.env.USER_EMAIL,
  PASSWORD: process.env.PASSWORD_EMAIL,

}
module.exports = { config }