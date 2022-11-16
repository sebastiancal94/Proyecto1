const {config} = require('../settings/config.env')
function indexSetting(app) {
    app.set('port',config.PORT)
}
module.exports = { indexSetting }