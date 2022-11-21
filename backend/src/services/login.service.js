const { models } = require('./../database/database')
class loginService {
  constructor() {}
  async create(data) {
    const newLogin = await models.Login.create(data)
    return newLogin
  }
  async find() {
    const login = await models.Login.findAll()

    return login
  }
  async findOne(id) {
    const Login = await models.Login.findByPk(id)
    if (!Login) {
     return {message: 'Login unavailable'}
    }
    return Login
  }
  async update(id, changes) {
    const Login = await this.findOne(id)
    const rta = await Login.update(changes)
    return rta
  }
  async delete(id) {
    const Login = await this.findOne(id)
    await Login.destroy()
    return { id }
  }
}
module.exports = loginService
