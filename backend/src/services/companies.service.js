const { models } = require('./../libs/sequelize')
class Company {
    constructor() {}

async create(data) {
    const newCompany = await models.Company.create(data)
    return newCompany
    }
    async find() {
    const rta = await models.Company.findAll()
    return rta
    }
    async findOne(id) {
    const Company = await models.Company.findByPk(id)
    if (!Company) {
    throw boom.notFound('user not found')
    }
    return Company
    }
    async update(id, changes) {
    const Company = await this.findOne(id)
    const rta = await user.update(changes)
    return rta
    }
    async delete(id) {
    const Company = await this.findOne(id)
    await Company.destroy()
    return { id }
    }
}
module.exports = CompanyService