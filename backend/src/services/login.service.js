const { models } = require('./../database/database')
const boom = require('@hapi/boom')
class loginService {
  constructor() {}
  async create(data) {
    try {
      const newLogin = await models.Login.create(data)
      return newLogin
    } catch (error) {
      throw boom.notFound('User or password is not available')
    }
  }

  async find() {
    try {
      const login = await models.Login.findAll()
      return login
    } catch (error) {
      throw boom.notAcceptable('User or password is not available')
    }
  }

  async findOne(id) {
    try {
      const Login = await models.Login.findByPk(id)
      return Login
    } catch (error) {
      throw boom.notFound('User or password is not available')
    }
  }

  async update(id, changes) {
    try {
      const Login = await this.findOne(id)
      const rta = await Login.update(changes)
      return rta
    } catch (error) {
      throw boom.badData('invalid data for update')
    }
  }

  async delete(id) {
try {
  const Login = await this.findOne(id)
  await Login.destroy()
  return { id }

} catch (error) {
  throw boom.conflict('impossible delete, unauthorized')
  
}
  }
}
module.exports = loginService
