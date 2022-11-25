const { models } = require('../database/database')
const boom = require('@hapi/boom')
class trialService {
  constructor() {}
  async create(data) {
    try {
      const newTrial = await models.trial.create(data)
      return newTrial
    } catch (error) {
      throw boom.notFound('User or password is not available')
    }
  }

  async find() {
    try {
      const trial = await models.trial.findAll()
      return trial
    } catch (error) {
      throw boom.notAcceptable('User or password is not available')
    }
  }

  async findOne(id) {
    try {
      const trial = await models.trial.findByPk(id)
      return trial
    } catch (error) {
      throw boom.notFound('User or password is not available')
    }
  }

  async update(id, changes) {
    try {
      const trial = await this.findOne(id)
      const rta = await trial.update(changes)
      return rta
    } catch (error) {
      throw boom.badData('invalid data for update')
    }
  }

  async delete(id) {

      const trial = await this.findOne(id)
      try {
        const rta = await trial.destroy(id)
      } catch (error) {
        let rta =false
        return rta
      }


  }
}
module.exports = trialService
