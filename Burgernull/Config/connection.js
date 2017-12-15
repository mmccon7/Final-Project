// // Set up MySQL connection.
 var mysql = require("mysql");

 var connection = mysql.createConnection({
   port: 3306,
   host: "localhost",
   user: "root",
  password: "",
  database: "burgers_db"
 });

// // Make connection.
 connection.connect(function(err) {
   if (err) {
     console.error("error connecting: " + err.stack);
     return;
   }
   console.log("connected as id " + connection.threadId);
 });

// // Export connection for our ORM to use.
 module.exports = connection;



// // require mysql
 var mysql = require("mysql");
// // configuration for local instances
 var dbConfig = {
    host: "localhost",
     user: "root",
     password: process.env.PASSWORD || "",
     database: "burgers_db"
 };

// // setup the connection
// // DATABASE_URL env is set up for heroku
// // using pooling to stop app from crashing
 var connection = mysql.createPool(process.env.DATABASE_URL || dbConfig);

// // export the connection
 module.exports = connection;



// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.envJAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
      user: "root",
      password: "",
      database: "burgers_db" 
  });
};


connection.connect();
module.exports = connection;