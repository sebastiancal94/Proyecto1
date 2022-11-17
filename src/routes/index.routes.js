const express = require('express')
const usersRouter = require('./user.routes');
const GeolocationRouter = require('./geolocation.routes');
const CompaniesRouter = require('./companies.routes');
const AddressRouter = require('./address.routes')
function routerApi(app) {
  const router = express.Router()
    app.use('/', router)
  router.use('/users', usersRouter)
  router.use('/geolocation', GeolocationRouter)
  router.use('/Company', CompaniesRouter)
  router.use('/Address',AddressRouter)
}
module.exports = routerApi
