const express = require("express");
// const mysql = require("mysql");
const router = express.Router();

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
router.route("/").get(getProducts).post(addProduct);
router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);

module.exports = router;
