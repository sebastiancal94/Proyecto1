const { Model, DataTypes, Sequelize } = require('sequelize')
const COMPANY_TABLE = 'companies'
const CompaniesSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: { type: DataTypes.STRING },
  catchPhase: {
    type: DataTypes.STRING,
    field: 'catch_phase'
  },
  bs: { type: DataTypes.STRING }
}
class Company extends Model {
  static associate() {
    // relations
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: COMPANY_TABLE,
      modelName: 'Company',
      timestamps: true
    }
  }
}
module.exports = { COMPANY_TABLE, CompaniesSchema, Company }
