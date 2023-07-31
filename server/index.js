// const express = require("express");
// const mysql = require("mysql");
import express from "express";
import mysql from "mysql";

const app = express();

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

const PORT = 5000; // or any other port you prefer


app.use(express.json())

app.get("/", (req, res) => {
  res.json("hello this is the backend");
});

app.get("/products", (req, res) => {
  const q = "SELECT * FROM products"
  connection.query(q,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
});
// app.get("/products/:id", (req, res) => {
//   const q = "SELECT * FROM products where"
//   connection.query(q,(err,data)=>{
//     if(err) return res.json(err)
//     return res.json(data)
//   })
// });

app.post("/products/add", (req, res) => {
  const q = "INSERT INTO `products`(`name`, `category`, `description`, `price`, `stock`, `image`, `discount`) VALUES (?)"
  const values =[
    req.body.name,
    req.body.category,
    req.body.description,
    req.body.price,
    req.body.stock,
    req.body.image,
    req.body.discount
  ]
  connection.query(q,[values],(err,data)=>{
    if(err) return res.json(err)
    return res.json("Product Created Successfully")
  })
});

// Update a product by ID
app.put("/products/update/:id", (req, res) => {
  const productId = req.params.id;
  const {name,category,description,price,stock,image,discount} = req.body;
  
  const q = `UPDATE products SET name=?,category=?,description=?,price=?,stock=?,image=?,discount=? WHERE id= ?`;
  const values = [name,category,description,price,stock,image,discount];

  connection.query(q, [...values,productId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Product updated successfully");
  });
});

// Delete a product by ID
app.delete("/products/delete/:id", (req, res) => {
  const productId = req.params.id;
  const q = "DELETE FROM products WHERE id= ?";
  connection.query(q ,[productId] , (err, data) => {
    if (err) return res.json(err);
    return res.json("Product deleted successfully");
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
