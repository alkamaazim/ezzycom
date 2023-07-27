import express from 'express';
import mysql from 'mysql';

const app = express();

const dbConfig = {
  host: 'localhost',
  user: 'alkama.azim',
  password: 'alkama@123',
  database: 'ezzyCom',
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database!');
});

const PORT = 5000; // or any other port you prefer

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// const { createPool } = require("mysql");

// const pool = createPool({
//   host: "localhost",
//   user: "alkama.azim",
//   password: "alkama@123",
//   database: "ezzyCom",
// });

// pool.query(`select * from users`, (err, result, fields) => {
//   if(err){
//     return console.log(err);
//   }
//   return console.log(result)
// })


