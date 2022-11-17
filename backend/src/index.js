const express = require('express')
const app = express()
const sequelize = require('./database/database')
const { indexMiddleware } = require('./start/index.middleware')
const { indexSetting } = require('./start/index.setting')
const routerApi = require('./routes/index.routes')
indexMiddleware(app)
indexSetting(app)
routerApi(app)
async function main() {
  try {
    await sequelize.sync()
    app.use(require('./routes/index.routes'))
    app.listen(app.get('port'), () => {
      console.log('listening on port ' + app.get('port'))
    })
  } catch (error) {
    console.error('impossible connection', error)
  }
}
main()
