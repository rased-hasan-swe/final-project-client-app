import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './NotFound.css';
const NotFound = () => {
    return (
        <>
        <Header></Header>
        <div className="text-center text-danger mt-5 style ">
        <h1 >404 page not found </h1>
    </div>
    <Footer></Footer>
    </>
    );
};

export default NotFound;