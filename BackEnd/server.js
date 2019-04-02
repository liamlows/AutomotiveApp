// Automotive App RESTFul API

// Define const variables
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

// Start API server
app.listen(PORT, HOST);
console.log('API server started on: ' + port);

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Import routes and pass express app object to register them
var routes = require('./app/routes/approutes');
routes(app);
