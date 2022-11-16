const { config } = require('../settings/config.env')
const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
  host: config.DB_HOST,
  dialect: config.DB_DIALECT,
  pool: {
    max: parseInt(config.POOL_CONFIG_MAX),
    min: parseInt(config.POOL_CONFIG_MIN),
    acquire: config.POOL_CONFIG_ACQUIRE,
    idle: config.POOL_CONFIG_IDLE
  }
})
module.exports = sequelize
