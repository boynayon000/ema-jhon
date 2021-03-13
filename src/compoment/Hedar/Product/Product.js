import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    console.log(props);
    const {name,img ,seller,stock,price}=props.product;
    return (
        <div className="product">
            <div className="product-img">
            <img src={img} alt="" srcset=""/>
            </div>
            <div >
            <h2 className="product-name">{name}</h2>
            <p className="seller-name"><small>by {seller}</small></p>
            <h3>${price}</h3>
            <p className="product-stock"><small>in {stock} is avilable in stock</small></p>
           <button onClick={()=> props.handeleAddproduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />to add cart</button>
            </div>
           
        </div>
    );
};

export default Product;