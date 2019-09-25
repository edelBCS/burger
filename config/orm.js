var connection = require("./connection.js");

var orm = {
    selectAll: function(tableName, cb){
        var queryStr = "SELECT * FROM ??";
        console.log(queryStr);
        connection.query(queryStr, [tableName], cb);
    },
    insertOne: function(tableName, cols, name, cb){
        var queryStr = `INSERT INTO ${tableName} (??) VALUES (?, 0)`;
        console.log(queryStr);
        connection.query(queryStr, [cols, name], cb);
    },
    updateOne: function(tableName, col, val, id, cb){
        var queryStr = `UPDATE ${tableName} SET ${col} = '${val} WHERE id = ${id}`;
        console.log(queryStr);
        connection.query(queryStr, cb);
    }
};

module.exports = orm;