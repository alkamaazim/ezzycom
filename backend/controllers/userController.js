const connection = require("../db/db");
const jwt = require('jsonwebtoken');
const USER = require("../modals/user");

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
  const user = USER();
};
//@desc add  User
//@route POST /users
//@access public
const addUser = async (req, res) => {

  const newUser = new USER(req.body);
  const token = await newUser.generateJWToken();
  try {
    await newUser.save();
    res.status(201).send({newUser, token});
  } catch (e) {
    res.status(400).send(e);
  }

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
