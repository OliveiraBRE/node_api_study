const path = require('path');
const express = require('express');
// const route = require('../routes/router');

const app = express();

// app.use('/', route);

app.get('/home', (req, res) => {
  res.json({ home: 'Hello from Node Home Page \\o/'});
});

app.get('/api', (req, res) => {
  res.json({ text: 'Some text from API example'});
});


app.listen(3001, () => {
  console.log('Connected');
});