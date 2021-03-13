
import React from 'react';
import logo from '../../images/logo.png';
import './Heder.css';

const Hedar = () => {
    return (
        <div className="hedar">
            <img src={logo} alt="" srcset=""/>
            <nav>
            <a href="/shop">Shop</a>
            <a href="/home">Home</a>
            <a href="/order">Order</a>
            </nav>
        </div>
    );
};

export default Hedar;