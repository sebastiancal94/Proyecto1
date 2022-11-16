const { config } = require('../settings/config.env')
const { Sequelize } = require('sequelize')
const setupModels = require('../start/index.database')
const USER = encodeURIComponent(config.DB_USER);
const PASSWORD = encodeURIComponent(config.DB_PASSWORD);
const URI = `postgres://${USER}:${PASSWORD}@${config.DB_HOST}:${config.DB_PORT}/${config.DB_NAME}`;
const sequelize = new Sequelize(URI, {
  dialect: config.DB_DIALECT,
  logging: true,
  pool: {
    max: parseInt(config.POOL_CONFIG_MAX),
    min: parseInt(config.POOL_CONFIG_MIN),
    acquire: config.POOL_CONFIG_ACQUIRE,
    idle: config.POOL_CONFIG_IDLE
  }
})
setupModels(sequelize)
module.exports = sequelize
