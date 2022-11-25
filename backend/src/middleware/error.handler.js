function logErrors(err, req, res, next) {
  console.log('logErrors')
    console.error(err)
    next(err)
}
function errorHandler(err, req, res, next) {
  console.log('errorHandler')
  if (err.isBoom) {
    const { output } = err
    res.status(output.statusCode).json(output.payload)
  }
  next(err)
}
module.exports = { logErrors, errorHandler }
