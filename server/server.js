const path = require('path')
const express = require('express')

const server = express()
const authRoutes = require('./routes/auth')
// Get tokendecoder
const backgroundRoutes = require('./routes/background')
const countryRoutes = require('./routes/country')
const bucketListRoutes = require('./routes/bucketlist')

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1', authRoutes)
server.use('/api/v1/background', backgroundRoutes)
server.use('/api/v1/bucketlist', bucketListRoutes)
server.use('/api/v1/country', countryRoutes)

module.exports = server
