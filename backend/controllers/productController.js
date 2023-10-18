const connection = require("../db/db");

//@desc Get all Products
//@route GET /product
//@access public
const getProducts = (req, res) => {
  const q = "SELECT * FROM products";
  connection.query(q, (err, data) => {
    if (err) return res.json(err);
    const dataObj = {
      items : data, 
    }
    return res.json(dataObj);
  });
};
//@desc Get one Product Products
//@route GET /products/:id
//@access public
const getProduct = (req, res) => {
  const productId = req.params.id;
  const q = "SELECT * FROM products WHERE id = ?";
  connection.query(q,[productId], (err, data) => {
    if (err) return res.json(err);
    const dataObj = {
      items : data, 
    }
    return res.json(dataObj);
  });
};
//@desc add  Products
//@route POST /products
//@access public
const addProduct = (req, res) => {
  const q =
    "INSERT INTO `products`(`name`, `category`, `description`, `price`, `stock`, `image`, `discount`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.category,
    req.body.description,
    req.body.price,
    req.body.stock,
    req.body.image,
    req.body.discount,
  ];
  connection.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Product Created Successfully");
  });
};

//@desc Update  Products
//@route PUT /products/:id
//@access public
const updateProduct = (req, res) => {
  const productId = req.params.id;
  const { name, category, description, price, stock, image, discount } =
    req.body;
  const q = `UPDATE products SET name=?,category=?,description=?,price=?,stock=?,image=?,discount=? WHERE id= ?`;
  const values = [name, category, description, price, stock, image, discount];

  connection.query(q, [...values, productId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Product updated successfully");
  });
};

//@desc delete  Products
//@route DELETE /products/:id
//@access public
const deleteProduct = (req, res) => {
  const productId = req.params.id;
  const q = "DELETE FROM products WHERE id= ?";
  connection.query(q, [productId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Product deleted successfully");
  });
};

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
