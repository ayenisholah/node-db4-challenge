const express = require('express');
const knex = require('knex');
const db = knex(require('./knexfile').development);

const ReceipeRouter = require('./receipes/receipe-router.js');
const server = express();

server.use(express());

server.use(express.json());
server.use('/api/receipes', ReceipeRouter);

module.exports = server;