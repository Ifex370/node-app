'use strict';

const express = require('express');

// Constants
const PORT = 9393;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1 style="color:green;">Large Systems Java Application for St2 - version-10!!</h1> \n');
});

app.listen(PORT, HOST);

module.exports = app;
