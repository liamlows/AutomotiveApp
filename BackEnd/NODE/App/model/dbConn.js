'use strict';

var mysql = require('mysql');

// Local mysql db connection
var connection = mysql.createConnection({
  host: 'autoapp_mysql_comp',
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
