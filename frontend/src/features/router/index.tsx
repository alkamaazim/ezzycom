import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
// import Header from '../../components/layout/header';
// import Footer from '../../components/layout/footer';
import Home from '../../components/pages/home';
import ProductInfo from '../../components/pages/productInfo';
import Cart from '../../components/pages/cart';
import WishList from '../../components/pages/wishlist';
import AdminLogin from '../../admin';
import AdminDashboard from '../../admin/dashboard';
import AddProduct from '../../admin/addProduct';
import ProductList from '../../admin/productList';

type Props = {}

const CustomRouters = (props: Props) => {
  return (
    <React.Fragment>
        <Router>
            {/* <Header /> */}
            <Routes>
                <Route path='/admin' element={<AdminLogin />}/>
                <Route path='/admindashboard' element={<AdminDashboard />}/>
                <Route path='/addproduct' element={<AddProduct />}/>
                <Route path='/productlist' element={<ProductList />}/>

                <Route path="/" element={<Home />} />
                <Route path="/productinfo" element={<ProductInfo />} />
                <Route path="/wishlist" element={<WishList />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            {/* <Footer /> */}
        </Router>
    </React.Fragment>
  )
}

export default CustomRouters;