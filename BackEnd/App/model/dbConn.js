'use strict';

var mysql = require('mysql');

// Local mysql db connection
var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'manager',
  password: 'pass',
  database: 'AutomotiveApp'
});

// Error handling
connection.connect(function(err) {
  if (err) throw err;
});

// Export SQL conn
module.exports = connection;
