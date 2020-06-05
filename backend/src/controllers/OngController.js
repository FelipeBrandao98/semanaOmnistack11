<<<<<<< HEAD
const generateUniqueId = require('../utils/generateUniqueId')
const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*')
    
        return response.json(ongs)
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body
    
    const id = generateUniqueId()

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return response.json({id})
    }
=======
const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*')
    
        return response.json(ongs)
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body
    
    const id = crypto.randomBytes(4).toString('HEX')

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return response.json({id})
    }
>>>>>>> db0dde8af03af4d0da7352992730d8c103a14e5f
}