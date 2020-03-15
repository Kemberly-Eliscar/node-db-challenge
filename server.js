const express = require("express");
const helmet = require("helmet");

const projectRouter = require('./models-routes/projectRouter');
const resourceRouter = require('./models-routes/resourceRouter');
const taskRouter = require('./models-routes/taskRouter');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', taskRouter)

module.exports = server;