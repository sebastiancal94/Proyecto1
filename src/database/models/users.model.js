const { DataTypes } = require('sequelize')
const { sequelize } = require('../database')
sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  userName: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  address_relation: {
    type: DataTypes.INTEGER
  },
  geo_relation: {
    type: DataTypes.INTEGER
  },

  phone: {
    type: DataTypes.STRING
  },
  website: {
    type: DataTypes.STRING
  }
})
