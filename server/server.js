const path = require('path')
const express = require('express')

const backgroundRoutes = require('./routes/background')
const bucketListRoutes = require('./routes/bucketlist')

const server = express()
const authRoutes = require('./routes/auth')

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1', authRoutes)
server.use('/api/v1/background', backgroundRoutes)
server.use('/api/v1/bucketlist', bucketListRoutes)

module.exports = server
