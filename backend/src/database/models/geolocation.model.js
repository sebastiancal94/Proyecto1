const { Model, DataTypes, Sequelize } = require('sequelize')
const GEOLOCATION_TABLE = 'geo_locations'
const GeolocationSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  latitude: { type: DataTypes.STRING },
  longitude: { type: DataTypes.STRING },
}
class geo_locations extends Model {
  static associate() {
    geo_locations.address = geo_locations.belongsTo(address)
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: GEOLOCATION_TABLE,
      modelName: 'geo_locations',
      timestamps: true
    }
  }
}
module.exports = { GEOLOCATION_TABLE, geo_locations, GeolocationSchema }
