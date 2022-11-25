const express = require('express')
const usersRouter = require('../routes/user.routes')
const GeolocationRouter = require('../routes/geolocation.routes')
const CompaniesRouter = require('../routes/companies.routes')
const AddressRouter = require('../routes/address.routes')
const trialRoutes = require('../routes/trial.routes')
const axiosRouter = require('../routes/axios.routes')
function routerApi(app) {
  const router = express.Router()
  app.use('/', router)
  router.use('/login', trialRoutes)
  router.use('/users', usersRouter)
  router.use('/geolocation', GeolocationRouter)
  router.use('/Company', CompaniesRouter)
  router.use('/Address', AddressRouter)
  router.use('/axios', axiosRouter)
}
module.exports = routerApi
