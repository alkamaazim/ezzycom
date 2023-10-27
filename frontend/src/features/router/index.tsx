import React from 'react'
import Home from '../../pages/home';
import Cart from '../../pages/cart';
import WishList from '../../pages/wishlist';
import AdminRouter from './admin/adminRouter';
import ProductInfo from '../../pages/productInfo';
// import AddCategory from '../../admin/addCategory';
// import Footer from '../../components/layout/footer';
// import Header from '../../components/layout/header';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

type Props = {}

const CustomRouters = (props: Props) => {
  return (
    <React.Fragment>
        <Router>
            {/* <Header /> */}
            <Routes>
                {AdminRouter()}
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<WishList />} />
                <Route path="/productinfo/:id" element={<ProductInfo />} />
            </Routes>
            {/* <Footer /> */}
        </Router>
    </React.Fragment>
  )
}

export default CustomRouters;