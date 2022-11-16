const { Model, DataTypes, Sequelize } = require('sequelize')
const ADDRESS_TABLE = 'address'
const AddressSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    street: { type: DataTypes.STRING },
    suite: { type: DataTypes.STRING },
    city: { type: DataTypes.STRING },
    zipCode: { type: DataTypes.STRING },
    geolocation_FK: {
        type: DataTypes.INTEGER,
    field: 'geo_relation'}

}
class Address extends Model {
  static associate() {
    // relations
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
module.exports = {ADDRESS_TABLE,Address,AddressSchema}