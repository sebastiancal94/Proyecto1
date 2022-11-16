const { Model,DataTypes, Sequelize } = require('sequelize')
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
  address_Fk: {
    type: DataTypes.INTEGER,
    field: 'address'
  },
  geo_Fk: {
    type: DataTypes.INTEGER,
    field:"geolocation_relation"
  },

  phone: {
    type: DataTypes.STRING
  },
  website: {
    type: DataTypes.STRING
  },
  Company_Fk: {
    type: DataTypes.STRING,
    field:"company_name"
  }

}
class User extends Model{
  static associate() {
    // relations
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
