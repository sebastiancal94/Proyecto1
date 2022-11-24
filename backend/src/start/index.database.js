const {UserSchema, User } = require('../database/models/users.model')
const { CompaniesSchema, Company } = require('../database/models/companies.model')
const { AddressSchema, Address } = require('../database/models/address.model')
const { GeolocationSchema, Geolocation } = require('../database/models/geolocation.model')
const { LoginSchema, Login } = require('../database/models/login.model')
function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize))
    Company.init(CompaniesSchema, Company.config(sequelize))
    Address.init(AddressSchema, Address.config(sequelize))
    Geolocation.init(GeolocationSchema, Geolocation.config(sequelize))
    Login.init(LoginSchema, Login.config(sequelize))
}
module.exports =setupModels