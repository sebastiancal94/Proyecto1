const { Model, DataTypes, Sequelize } = require('sequelize')
const LOGIN_TABLE = 'login_table'
const LoginSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
}
class Login extends Model {
  static associate() {
    // relations
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: LOGIN_TABLE,
      modelName: 'login_table',
      timestamps: true
    }
  }
}
module.exports = {LOGIN_TABLE,Login,LoginSchema}