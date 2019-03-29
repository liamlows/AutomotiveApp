// Automotive App RESTFul API

// Define const variables
const express = require('express'),
app = express(),
bodyParser = require('body-parser'),
port = process.env.PORT || 3000;

// Start API server
app.listen(port);
console.log('API server started on: ' + port);

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Import routes and pass express app object to register them
var routes = require('./app/routes/approutes');
routes(app);
