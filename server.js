const express = require('express')

const projectRouter = require('./models-routes/projectRouter');

const server = express()

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectRouter)

module.exports = server;