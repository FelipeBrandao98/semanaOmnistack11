<<<<<<< HEAD
const connection = require('../database/connection')

module.exports = {
    async index(request, response){
        const ong_id = request.headers.authorization

        const incidents = await connection('incidents').where('ong_id', ong_id).select('*')

        return response.json(incidents)
    }
=======
const connection = require('../database/connection')

module.exports = {
    async index(request, response){
        const ong_id = request.headers.authorization

        const incidents = await connection('incidents').where('ong_id', ong_id).select('*')

        return response.json(incidents)
    }
>>>>>>> db0dde8af03af4d0da7352992730d8c103a14e5f
}