const express = require('express')
const app = express()
const { indexMiddleware } = require('./start/index.middleware')
const {indexSetting} =require('./start/index.setting')
indexMiddleware(app)
indexSetting(app)

app.listen(app.get('port'), () => {
    console.log('listening on port ' + app.get('port'))
})