const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const app = express()
//Informar ao back-end que o parametro esperado de post é um json
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)
