const {config} = require('../settings/config.env')
function indexSetting(app) {
    app.set('port',process.env.PORT)
}
module.exports = { indexSetting }