const express = require('express')
const router = express.Router()
const axios = require('axios')
const { models } = require('../database/database')
const { User } = require('../database/models/users.model')
const { address } = require('../database/models/address.model')
const { geo_locations } = require('../database/models/geolocation.model')
const { Company } = require('../database/models/companies.model')
const allData = async () => {
    const Data = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(Data.data)
    const DataUsers = Data.data.map(async (element, index) => {
        try {
            await models.trials.bulkCreate([
                {
                    id: element.id,
                    name: element.name,
                    username: element.username,
                    password: '123456',
                    email: element.email,
                    phone: element.phone,
                    website: element.website,
                    company: element.company,
                    address: element.address
                }
            ])
            await models.geo_locations.create({
                latitude: element.address.geo.lat,
                longitude: element.address.geo.lng
            })
            await models.address.create(
                {
                    street: element.address.street,
                    suite: element.address.suite,
                    city: element.address.city,
                    zipCode: element.address.zipcode,
                    geoLocationId: index + 1
                },
                {
                    include: [
                        {
                            association: address.geo_locations,
                            include: [address.geo_locations]
                        }
                    ]
                }
            )
            await models.Company.create({
                name: element.company.name,
                catchPhrase: element.company.catchPhrase,
                bs: element.company.bs
            })
            await models.User.create(
                {
                    name: element.name,
                    userName: element.username,
                    email: element.email,
                    phone: element.phone,
                    website: element.website,
                    addressId: index + 1,
                    CompanyId: index + 1
                },
                {
                    include: [
                        {
                            association: User.address,
                            association: User.Company,
                            include: [User.address],
                            include: [User.Company]
                        }
                    ]
                }
            )

        } catch (error) {
          
        }
         
    
    })
}
module.exports = {allData}