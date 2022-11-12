const express = require('express')
const app = express()
const morgan = require('morgan')
let port = 3000
app.use(morgan('dev'))
app.listen(port, () => {
    console.log('listening on port ' + port)
})