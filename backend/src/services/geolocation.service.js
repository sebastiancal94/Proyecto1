const { models } = require('./../libs/sequelize')
class GeolocationService {
    constructor() {}

async create(data) {
    const newGeolocation = await models.Geolocation.create(data)
    return newGeolocation
    }
    async find() {
    const rta = await models.Geolocation.findAll()
    return rta
    }
    async findOne(id) {
    const Geolocation = await models.Geolocation.findByPk(id)
    if (!Geolocation) {
    throw boom.notFound('user not found')
    }
    return Geolocation
    }
    async update(id, changes) {
    const Geolocation = await this.findOne(id)
    const rta = await user.update(changes)
    return rta
    }
    async delete(id) {
    const Geolocation = await this.findOne(id)
    await Geolocation.destroy()
    return { id }
    }
}
module.exports = GeolocationService