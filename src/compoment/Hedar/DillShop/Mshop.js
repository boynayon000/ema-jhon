import React, { useState } from 'react';
import fakeData from '../../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Mshop.css';

const Mshop = () => {
 const product0=fakeData.slice(0,80);
 const [prductc ,setproduct]=useState(product0);
 const [cart , setcart] = useState ([]);
 const handelAddproduct = (product) =>{
     console.log("added a cart",product);
     const newCart=[...cart,product];
     setcart (newCart);
     
 }
    return (
        <div className="div-container">
         <div className="product-container">
               {
                   prductc.map(pd=><Product
                   handeleAddproduct={handelAddproduct}
                    product={pd}>
                    </Product>)
               }
        </div>
        <div>
            
       
           <Cart cart={cart}></Cart>
        </div>
    </div>
 
);
};

export default Mshop;