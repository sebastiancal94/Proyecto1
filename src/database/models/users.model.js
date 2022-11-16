const { DataTypes } = require('sequelize')
const { sequelize } = require('../database')
const { Company } = require('./companies.model')
const { Address } = require('./address.model')
const Users = sequelize.define('Users', {
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
  },
  Company_relation: {
    type: DataTypes.STRING
  }
})

User.hasMany(Company, {
  foreignKey: 'Company_relation',
  sourceKey: 'id'
})
Company.hasMany(User, {
  foreignKey: 'Company_relation',
  targetId: 'id'
})
module.exports = Users
