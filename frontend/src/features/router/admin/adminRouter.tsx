import React from "react";
// import Admin from "../../../admin";
import { Route } from "react-router-dom";
import Signup from "../../../admin/auth/signup";
import AdminDashboard from "../../../admin/dashboard/dashboard";
import UserList from "../../../admin/users/usersList";
import OrderList from "../../../admin/orders/orderList";
import AddProduct from "../../../admin/products/addProduct";
import AddCategory from "../../../admin/products/addCategory";
import ProductList from "../../../admin/products/productList";

const AdminRouter = () => {
  return [
    // <Route path="/admin" key="admin" element={<Admin />} />,
    <Route path='/userlist' element={<UserList />}/> ,
    <Route path='/orderlist' element={<OrderList />}/> ,
    <Route path='/addcategory' element={<AddCategory />}/> ,
    <Route path="/signup" key="signup" element={<Signup />} />,
    <Route path="/productlist" key="productlist" element={<ProductList />} />,
    <Route path="/addproduct/:id?" key="admaddproductin" element={<AddProduct />} />,
    <Route path="/admindashboard" key="admindashboard" element={<AdminDashboard />} />,
  ];
};

export default AdminRouter;
