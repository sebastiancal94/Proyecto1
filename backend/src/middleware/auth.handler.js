const boom = require('@hapi/boom');
const { config } = require('../settings/config.env');
function checkApiKey(req, res, next) {
  const apiKey = req.headers['api'];
  if (apiKey === config.API_KEY) {
    next();
  } else {
    next(boom.unauthorized());
  }
}

module.exports = { checkApiKey }