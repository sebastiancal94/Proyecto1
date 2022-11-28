const express = require('express')
const {checkApiKey }= require('../middleware/auth.handler')
const usersRouter = require('../routes/user.routes')
const GeolocationRouter = require('../routes/geolocation.routes')
const CompaniesRouter = require('../routes/companies.routes')
const AddressRouter = require('../routes/address.routes')
const trialRoutes = require('../routes/trial.routes')
const AxiosRouter = require('../routes/axios.routes')
function routerApi(app) {
  const router = express.Router()
  app.use('/', router)
  router.use('/login', trialRoutes)
  router.use('/users', usersRouter)
  router.use('/geolocation', GeolocationRouter)
  router.use('/Company', CompaniesRouter)
  router.use('/Address', AddressRouter)
  router.use('/axios', AxiosRouter)
  // router.use('/',
  //   ( req, res) => {
  //   res.json({message:"init app"})
  // })
}
module.exports = routerApi
