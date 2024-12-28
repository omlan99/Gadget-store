import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
const Layout = () => {
    return (
        <div className='container mx-auto'>
            {/* navbar */}
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-185px)]'>
                <Outlet></Outlet>
            </div>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Layout;