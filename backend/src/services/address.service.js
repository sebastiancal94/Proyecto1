const { models } = require('./../libs/sequelize')
class Address {
    constructor() {}

async create(data) {
    const newAddress = await models.Address.create(data)
    return newAddress
    }
    async find() {
    const rta = await models.Address.findAll()
    return rta
    }
    async findOne(id) {
    const Address = await models.Address.findByPk(id)
    if (!Address) {
    throw boom.notFound('user not found')
    }
    return Address
    }
    async update(id, changes) {
    const Address = await this.findOne(id)
    const rta = await user.update(changes)
    return rta
    }
    async delete(id) {
    const Address = await this.findOne(id)
    await Address.destroy()
    return { id }
    }
}
module.exports = AddressService