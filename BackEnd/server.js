// Automotive App RESTFul API

// Define const variables
const express = require('express'),
bodyParser = require('body-parser'),
app = express(),
PORT = process.env.PORT || 8080,
HOST = 0.0.0.0;

// Start API server
app.listen(port);
console.log('API server started on: ' + port);

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Import routes and pass express app object to register them
var routes = require('./app/routes/approutes');
routes(app);
