const express = require('express')
const morgan = require('morgan')
function indexMiddleware(app) {
  app.use(morgan('dev'))
  app.use(express.json())
  app.use(express.urlencoded(({ extended: false })))
}
module.exports = { indexMiddleware }