import React from 'react';
import { Helmet } from 'react-helmet';
import useCart from '../../../Hooks/useCart';

const MyCart = () => {
    const [ cart ] = useCart();
    console.log(cart);
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    return (
        <div>
            <Helmet>
                <title>Bisro Boss | My Cart</title>
            </Helmet>
            <div className='uppercase'>
                <h3 className='text-3xl'>Items: {cart.length}</h3>
                <h3 className='text-3xl'>Price: ${total}</h3>
                <button className='btn btn-warning btn-sm'>Pay</button>
            </div>
        </div>
    );
};

export default MyCart;