const mysql = require('mysql');
const dbConfig = {
  host: "localhost",
  user: "alkama.azim",
  password: "alkama@123",
  database: "ezzyCom",
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    return;
  }
  console.log("Connected to MySQL database!");
});
module.exports = connection;