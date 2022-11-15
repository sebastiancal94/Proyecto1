const express = require('express')
const env = require('env')
function indexSetting(app) { 
    app.set('port',process.env.PORT)
}
module.exports = { indexSetting }