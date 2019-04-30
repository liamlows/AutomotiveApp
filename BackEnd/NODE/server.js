// Automotive App RESTFul API

// Define const variables
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

// Start API server
app.listen(PORT, HOST);
console.log('API server started on: ' + PORT);

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Allow cors to be enabled
app.use(cors());

// Import routes and pass express app object to register them
var routes = require('./App/routes/appRoutes');
routes(app);
