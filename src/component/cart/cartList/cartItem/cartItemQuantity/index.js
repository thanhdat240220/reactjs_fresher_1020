import React from 'react';
import classes from './index.module.css';

function CartItemQuantity(props) {
    return (
        <React.Fragment>
            <div className={classes.shoppingQuantity}>
                <p className={classes.shoppingQuantityInfo}>Số lượng:</p>
                <div className={classes.orderUpDown}>
                    <div className={classes.inputGroup}>
                        <div className={classes.inputGroupBtn}>
                            <button type="button" className={classes.buttonMinus}>
                            </button>
                        </div>
                        <input type="text" className={classes.inputQuantity} value="1" min="1" max="10" />
                        <div className={classes.inputGroupBtn}>
                            <button type="button" className={classes.buttonPlus}>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}

export default CartItemQuantity;