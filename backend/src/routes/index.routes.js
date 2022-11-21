const express = require('express')
const usersRouter = require('./user.routes')
const GeolocationRouter = require('./geolocation.routes')
const CompaniesRouter = require('./companies.routes')
const AddressRouter = require('./address.routes')
const loginRouter = require('./login.routes')
function routerApi(app) {
  const router = express.Router()
  app.use('/', router)
  router.use('/login', loginRouter)
  router.use('/users', usersRouter)
  router.use('/geolocation', GeolocationRouter)
  router.use('/Company', CompaniesRouter)
  router.use('/Address', AddressRouter)
  router.use('/', (req, res) => {
    res.json({ message: "this is start page" })})
}
module.exports = routerApi
