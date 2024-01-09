const connection = require("../db/db");
require("../modals/user");

//@desc Get all Products
//@route GET /product
//@access public
const getUsers = (req, res) => {
  const q = "SELECT * FROM user";
  connection.query(q, (err, data) => {
    if (err) return res.json(err);
    const dataObj = {
      items: data,
    };
    return res.json(dataObj);
  });
};
//@desc Get one Product Products
//@route GET /products/:id
//@access public
const getUser = (req, res) => {
  const userId = req.params.id;
  const q = "SELECT * FROM user WHERE id = ?";
  connection.query(q, [userId], (err, data) => {
    if (err) return res.json(err);
    const dataObj = {
      items: data,
    };
    return res.json(dataObj);
  });
};
//@desc add  Products
//@route POST /products
//@access public
const addUser = (req, res) => {

  console.log(req.body);





  // const q =
  //   "INSERT INTO `user`(`username`, `password`, `email`, `phone`, `dp`, `gender`, `address`) VALUES (?)";
  // const values = [
  //   req.body.username,
  //   req.body.password,
  //   req.body.email,
  //   req.body.phone,
  //   req.body.dp,
  //   req.body.gender,
  //   req.body.address,
  // ];
  // connection.query(q, [values], (err, data) => {
  //   if (err) return res.json(err);
  //   return res.json("User Created Successfully");
  // });
};

//@desc Update  Products
//@route PUT /products/:id
//@access public
const updateUser = (req, res) => {
  const userId = req.params.id;
  const { username, password, email, phone, dp, gender, address } =
    req.body;
  const q = `UPDATE user SET username=?,password=?,email=?,phone=?,dp=?,gender=?,address=? WHERE id= ?`;
  const values = [username, password, email, phone, dp, gender, address];

  connection.query(q, [...values, userId], (err, data) => {
    if (err) return res.json(err);
    return res.json("User updated successfully");
  });
};

//@desc delete  Products
//@route DELETE /products/:id
//@access public
const deleteUser = (req, res) => {
  const userId = req.params.id;
  const q = "DELETE FROM user WHERE id= ?";
  connection.query(q, [userId], (err, data) => {
    if (err) return res.json(err);
    return res.json("User deleted successfully");
  });
};

module.exports = {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
};
