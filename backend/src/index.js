const express = require('express')
const app = express()
const sequelize = require('./database/database')

const { indexSetting } = require('./start/index.setting')
const { indexMiddleware } = require('./start/index.middleware')
const { allData } = require('./start/axios')
const routerApi = require('./start/index.routes')
const { sendMail } = require('./settings/email')
indexMiddleware(app)
indexSetting(app)
routerApi(app)
id = 1 
email = 'ases741@gmail.com'
sendMail(id, email)
async function main() {
  try {
    await sequelize.sync({ force: true })
    if (sequelize.sync({ force: true })) {
       await allData()
    } else {
      console.log('false')
    }
    app.use(require('./start/index.routes'))
    app.listen(app.get('port'), () => {
      console.log('listening on port ' + app.get('port'))
    })
  } catch (error) {
    console.error('impossible connection', error)
  }
}

main()

