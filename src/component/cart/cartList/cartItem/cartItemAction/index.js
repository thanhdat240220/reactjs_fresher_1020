import React from 'react';
import classes from './index.module.css';

function CartItemAction(props) {
    return (
        <React.Fragment>
            <div className={classes.shoppingTotal}>
                <p className={classes.shoppingTtl}>Tổng tiền: </p>
                <p className={classes.shoppingCoin}>7.225.000&nbsp;₫</p>
            </div>
            <a href="#" className={classes.removeCart}>
                <span></span>
            </a>
        </React.Fragment>
    );
}

export default CartItemAction;