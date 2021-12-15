const mysql = require("mysql");

//creating a connection
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "cruddatabase",
  });

  module.exports = db