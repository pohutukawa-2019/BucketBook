const path = require('path')
const express = require('express')

const backgroundRoutes = require('./routes/background')

const server = express()


server.use(express.static(path.join(__dirname, '../public')))
server.use('/api/v1/background', backgroundRoutes)

module.exports = server
