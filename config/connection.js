

var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    require("dotenv").config();
    var dbAuth = require("./dbAuth.js");
    connection= mysql.createConnection(dbAuth.mysqlAuth);
}
  
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
  