const path = require('path');
const express = require('express');
const routes = require('./routes');

// const route = require('../routes/router');

const app = express();

// app.use('/', route);

app.use(routes);


app.listen(3001, () => {
  console.log('Connected');
});