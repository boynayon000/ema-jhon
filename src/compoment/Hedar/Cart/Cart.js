import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    const total= cart.reduce( (total,prd)=>total + prd.price,0);
    
let shiping=12;
    
    if( total > 170){
        shiping=0;
    }
    else if(total==0){
        shiping=0;
    }
    else if(total > 34){
        shiping=5;
    }

    const tax=(total /10).toFixed(2);
    const otherCost=Number(tax)+shiping;
    const totalPrice=(total+otherCost).toFixed(2);

    return (
        <div>
            <h4>Order summery</h4>
            <p>Items added:{cart.length}</p>
            <p>product price:{(total).toFixed(2)}</p>
            <p>shiping cost:{shiping}</p>
            <p>tax + vat:{tax}</p>
            <p>Total price:{totalPrice}</p>
        </div>
    );
};

export default Cart;