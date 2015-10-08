var config = require('../../config.js');
var mysql      = require('mysql');
var connection = mysql.createConnection( config.DBConfig );

module.exports.connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'qburst',
    database : 'mailing_system'
  });
module.exports = connection;