const express = require('express');
const mysql = require('mysql');
const app = express();

const dbConfig = {
  host: 'localhost',
  user: 'alkama.azim',
  password: 'alkama@123',
  database: 'ezzyCom'
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

// Example route to get all users
// app.get('/api/users', (req, res) => {
//     const query = 'SELECT * FROM users'; // Replace 'users' with your actual table name
  
//     connection.query(query, (error, results) => {
//       if (error) {
//         console.error('Error executing MySQL query:', error);
//         res.status(500).json({ error: 'Error fetching data from the database' });
//         return;
//       }
  
//       res.json(results);
//     });
//   });
