const express = require("express");
const mysql = require("mysql");
// import express from "express";
// import mysql from "mysql";

const app = express();
const PORT = 5000; // or any other port you prefer

app.use(express.json());

app.get("/", (req, res) => {
  res.json("hello this is the backend");
});

//middleware
app.use("/products", require("./routes/productRoutes"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
