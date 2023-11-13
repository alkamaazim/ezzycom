const express = require("express");
// const mysql = require("mysql");
const productRouter = express.Router();

const app = express();

// app.use(express.json());

const {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

//Routes for different Product add/delete/update
productRouter.route("/products/").get(getProducts).post(addProduct);
productRouter.route("/products/:id").get(getProduct).put(updateProduct).delete(deleteProduct);


module.exports = productRouter;
