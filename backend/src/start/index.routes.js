const express = require('express')
const {checkApiKey} = require('../middleware/auth.handler')
const usersRouter = require('../routes/user.routes')
const GeolocationRouter = require('../routes/geolocation.routes')
const CompaniesRouter = require('../routes/companies.routes')
const AddressRouter = require('../routes/address.routes')
const trialRoutes = require('../routes/trial.routes')
const AxiosRouter = require('../routes/axios.routes')
function routerApi(app) {
  const router = express.Router()
  app.use('/', router)
  router.use('/login',checkApiKey, trialRoutes)
  router.use('/users',checkApiKey, usersRouter)
  router.use('/geolocation',checkApiKey, GeolocationRouter)
  router.use('/Company',checkApiKey, CompaniesRouter)
  router.use('/Address',checkApiKey, AddressRouter)
  router.use('/axios',checkApiKey, AxiosRouter)
}
module.exports = routerApi
