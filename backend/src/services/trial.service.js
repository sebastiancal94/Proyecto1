const { models } = require('../database/database')
const boom = require('@hapi/boom')
const bcrypt = require('bcrypt')
class trialService {
  constructor() { }
  async create(data) {
   if (!data || data.length === 0) {
    return boom.badData('impossible to create a user')
   } else {
     const password = await bcrypt.hash(data.password, 10);
     const trials = await models.trials.create({
       ...data,
       password: password
     })
     delete(trials.dataValues.password)
    return trials
   }
   
  }
  async find() {
    const trial = await models.trials.findAll()
    if (trial === undefined || trial.length == 0) {
      return boom.notFound('No data found')
    } else {
      return trial

    }


  }

  async findOne(id) {
    const trial = await models.trials.findByPk(id)
    if (trial === undefined || trial.length == 0) {
      return boom.notFound('No data found')
    } else {
      return trial

    }

  }

  async update(id, changes) {

    const trial = await this.findOne(id)
    const rta = await trial.update(changes)
    if (trial === undefined || trial.length == 0) {
      return boom.notFound('No data found')
    } else {
      return rta
    }


  }

  async delete(id) {
    try {
      const trial = await models.trials.findByPk(id)
      if (trial) {
        await trial.destroy()
        return "Successfully"
      } else { return [] }
    } catch (e) { throw e }
  }

}
module.exports = trialService
