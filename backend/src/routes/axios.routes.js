const express = require('express')
const router = express.Router()
const axios = require('axios')
const { models } = require('../database/database')
const { User } = require('../database/models/users.model')
const { address } = require('../database/models/address.model')
const {geo_locations} = require('../database/models/geolocation.model')
router.get('/', async (req, res) => {
  const data = await axios.get('https://jsonplaceholder.typicode.com/users')
  const DataUsers = data.data

    DataUsers.map(async (element,index) =>  {
    models.trials.bulkCreate([
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
    await geo_locations.create({
        latitude: element.address.geo.lat,
        longitude: element.address.geo.lng
    })
      await address.create({
       street: element.address.street,
       suite: element.address.suite,
       city: element.address.city,
       zipCode: element.address.zipcode,
        geo_relation: index + 1,
      },
      {
        include: [{
          association: address.Geolocation,
          include: [ address.Geolocation ]
        }]
    })
    return User.create({
      name: element.name,
      username: element.username,
      email: element.email,
      phone: element.phone,
      website: element.website,
      addressId: index +1
    }, {
      include: [{
        association: User.address,
        include: [ User.address ]
      }]
    });
  })//fin map

  



  res.json(DataUsers)
})
module.exports = router
