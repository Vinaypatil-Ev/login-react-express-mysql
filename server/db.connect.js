const config = require("./configuration");
const mysql = require("mysql2");
const db = mysql.createConnection({
    host: config.host,
    user: config.username,
    password: config.password,
    database: config.dbname
    // host: "localhost",
    // user: "root",
    // password: "5191",
    // database: "python"
    // insecureAuth : true
});

module.exports = db;