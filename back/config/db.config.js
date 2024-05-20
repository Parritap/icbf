'use strict';

const mysql = require('mysql');

//local mysql db connection
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'root',
    database: 'icbf'
});

dbConn.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected!");
});


module.exports = dbConn;