const express = require('express')
const app = express()
const { indexMiddleware } = require('./start/index.middleware')
indexMiddleware(app)
let port = 3000
app.listen(port, () => {
    console.log('listening on port ' + port)
})