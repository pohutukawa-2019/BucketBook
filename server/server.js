const path = require('path')
const express = require('express')

const server = express()
const authRoutes = require('./routes/auth')
const backgroundRoutes = require('./routes/background')

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1', authRoutes)
server.use('/api/v1/background', backgroundRoutes)

module.exports = server
