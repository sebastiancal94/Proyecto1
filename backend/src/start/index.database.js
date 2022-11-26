const { trialSchema, trials } = require('../database/models/trial.model')
const { UserSchema, User } = require('../database/models/users.model')
const { CompaniesSchema, Company } = require('../database/models/companies.model')
const { AddressSchema, address } = require('../database/models/address.model')
const { GeolocationSchema, geo_locations } = require('../database/models/geolocation.model')

function setupModels(sequelize) {
  trials.init(trialSchema, trials.config(sequelize))
  User.init(UserSchema, User.config(sequelize))
  Company.init(CompaniesSchema, Company.config(sequelize))
  address.init(AddressSchema, address.config(sequelize))
  geo_locations.init(GeolocationSchema, geo_locations.config(sequelize))

  User.associate(sequelize.models)
  address.associate(sequelize.models)
}
module.exports = setupModels
