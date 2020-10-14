import React from 'react';
import CartItemAction from './cartItemAction';
import CartItemQuantity from './cartItemQuantity';
import CartItemInfo from './cartItemInfo';

function index(props) {
    return (
        <React.Fragment>
            <CartItemInfo />
            <CartItemQuantity />
            <CartItemAction />
        </React.Fragment>
    );
}

export default index;