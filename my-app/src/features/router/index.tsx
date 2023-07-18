import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../../components/layout/header';
import Footer from '../../components/layout/footer';

type Props = {}

const CustomRouters = (props: Props) => {
  return (
    <React.Fragment>
        <Router>
            <Header />
            <Routes>
                <Route path="" element="" />
            </Routes>
            <Footer />
        </Router>
    </React.Fragment>
  )
}

export default CustomRouters;