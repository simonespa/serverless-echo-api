const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
  res.json({
    message: 'hello'
  });
});

app.get('/world', (req, res) => {
  res.json({
    message: 'world'
  });
});

module.exports = app;
