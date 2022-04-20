const express = require('express');
const home = require('./pages/home');
const api = require('./pages/api');

const route = express.Router()


route.get('/home', home);
route.get('/api', api);

module.exports = route;