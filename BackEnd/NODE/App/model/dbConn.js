'use strict';

var mysql = require('mysql');

// Local mysql db connection
var connection = mysql.createConnection({
  host: '0.0.0.0',
  user: 'manager',
  password: 'Kent2015',
  database: 'AutomotiveApp'
});

// Error handling
connection.connect(function(err) {
  if (err) throw err;
});

// Export SQL conn
module.exports = connection;
