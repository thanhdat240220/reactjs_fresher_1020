import React from 'react';
import classes from './index.module.css';
import CartItem from './cartItem';

function CartList(props) {
    const renderListProductShopping = () => {
        return (
            <li className={classes.shoppingItem}>
                <CartItem />
            </li>
        );
    };
    return (
        <React.Fragment>
            <ul className={classes.shoppingList}>
                {renderListProductShopping()}
            </ul>
        </React.Fragment>
    );
}

export default CartList;