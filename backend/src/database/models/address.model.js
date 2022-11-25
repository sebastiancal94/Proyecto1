const { Model, DataTypes, Sequelize } = require('sequelize')
const { User } = require('./users.model')
const {geo_locations} =require('./geolocation.model')
const ADDRESS_TABLE = 'address'
const AddressSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull:false
  },
  street: {
    type: DataTypes.STRING
  },
  suite: {
    type: DataTypes.STRING
  },
  city: {
    type: DataTypes.STRING
  },
  zipCode: {
    type: DataTypes.STRING
  },
}
class address extends Model {
  static associate() {
    address.geo_locations = address.hasMany(geo_locations);
   
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ADDRESS_TABLE,
      modelName: 'address',
      timestamps: true
    }
  }
}
module.exports = { ADDRESS_TABLE, address, AddressSchema }
