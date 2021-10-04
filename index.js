const express = require('express');
 const cors = require('cors');
const mongoose = require('./db.js');
var router = require('./routers/router')
const app = express();
app.use(router)
const server = require('http').createServer(app);
server.listen(3001, () => {
  console.log("Success", 3001)
})

module.exports = app;