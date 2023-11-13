const express = require("express");
// const mysql = require("mysql");
const userRouter = express.Router();

const app = express();

const {
    getUsers,
    getUser,
    updateUser,
    addUser,
    deleteUser,
  } = require("../controllers/userController");

  //Routes for different User add/delete/update
userRouter.route("/users/").get(getUsers).post(addUser);
userRouter.route("/users/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = userRouter;