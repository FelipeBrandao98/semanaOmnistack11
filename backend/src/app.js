const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const { errors } = require('celebrate')
const app = express()
//Informar ao back-end que o parametro esperado de post é um json
app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())

module.exports = app