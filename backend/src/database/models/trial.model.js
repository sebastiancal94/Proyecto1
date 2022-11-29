const { Model, DataTypes, Sequelize } = require('sequelize')
const sequelize = require('../database')
const TRIAL_TABLE = 'trials'
const trialSchema = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    defaultValue: "pending-update"
  },
  email: {
    type: DataTypes.STRING,
    defaultValue: "pending-update"
  },
  address: {
    type: DataTypes.JSON,
    defaultValue: {
      geo: {
      }
    }
  },
  phone: {
    type: DataTypes.STRING,
    defaultValue: "pending-update"
  },
  website: {
    type: DataTypes.STRING,
    defaultValue: "pending-update"
  },
  company: {
    type: DataTypes.JSON,
    defaultValue: {}
  }
}
class trials extends Model {
  static associate() {
    // relations
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: TRIAL_TABLE,
      modelName: 'trials',
      timestamps: true
    }
  }
}
module.exports = {TRIAL_TABLE, trials, trialSchema }
