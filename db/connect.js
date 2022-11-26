
var mysql = require('mysql');

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pass@123",
    database: "edxplore"
});



module.exports = db