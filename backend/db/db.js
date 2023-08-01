const mysql = require('mysql');
const dbConfig = {
  host: "localhost",
  user: "mrawal",
  password: "Admin@123",
  database: "mrawal_ezzyCom",
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