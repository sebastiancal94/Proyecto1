const { Model, DataTypes, Sequelize } = require('sequelize')
const { address } = require('./address.model')
const {Company} = require('./companies.model')
const USER_TABLE = "users"
const UserSchema ={
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,

  },
  name: {
    type: DataTypes.STRING
  },
  userName: {
    type: DataTypes.STRING,
    field: 'username'
  },
  email: {
    type: DataTypes.STRING
  },

  phone: {
    type: DataTypes.STRING
  },
  website: {
    type: DataTypes.STRING
  },
}
class User extends Model{
  static associate() {
    User.Address = User.belongsTo(address);
    User.Company = User.belongsTo(Company);

  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: true,
    }
  }
}
module.exports = {USER_TABLE, UserSchema, User}
