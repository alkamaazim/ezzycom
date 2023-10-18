import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
// import Header from '../../components/layout/header';
// import Footer from '../../components/layout/footer';
import Home from '../../pages/home';
import ProductInfo from '../../pages/productInfo';
import Cart from '../../pages/cart';
import WishList from '../../pages/wishlist';
import AdminLogin from '../../admin';
import AdminDashboard from '../../admin/dashboard';
import AddProduct from '../../admin/addProduct';
// import AddCategory from '../../admin/addCategory';
// import ProductList from '../../admin/productList';
// import UserList from '../../admin/usersList';
// import OrderList from '../../admin/orderList';
import Signup from '../../admin/signup';

type Props = {}

const CustomRouters = (props: Props) => {
  return (
    <React.Fragment>
        <Router>
            {/* <Header /> */}
            <Routes>
                <Route path='/admin' element={<AdminLogin />}/>
                <Route path='/signup' element={<Signup />}/>
                <Route path='/admindashboard' element={<AdminDashboard />}/>
                <Route path='/addproduct' element={<AddProduct />}/>
                {/* <Route path='/addcategory' element={<AddCategory />}/> */}
                {/* <Route path='/productlist' element={<ProductList />}/> */}
                {/* <Route path='/userlist' element={<UserList />}/> */}
                {/* <Route path='/orderlist' element={<OrderList />}/> */}

                <Route path="/" element={<Home />} />
                <Route path="/productinfo/:id" element={<ProductInfo />} />
                <Route path="/wishlist" element={<WishList />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            {/* <Footer /> */}
        </Router>
    </React.Fragment>
  )
}

export default CustomRouters;