const { Model, DataTypes, Sequelize } = require('sequelize')
const TRIAL_TABLE = 'trials'
const trialSchema = {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  username: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING,
    default: '123456'
  },
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.JSON,
    default: {
      geo: {
      }
    }
  },
  phone: {
    type: DataTypes.STRING
  },
  website: {
    type: DataTypes.STRING
  },
  company: {
    type: DataTypes.JSON,
    default: {}
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
module.exports = { trials_TABLE: TRIAL_TABLE, trials, trialSchema }
