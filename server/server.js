const path = require('path')
const express = require('express')

const backgroundRoutes = require('./routes/background')
const countryRoutes = require('./routes/country')

const server = express()

server.use(express.static(path.join(__dirname, '../public')))
server.use('/api/v1/background', backgroundRoutes)
server.use('/api/v1/country', countryRoutes)

module.exports = server
