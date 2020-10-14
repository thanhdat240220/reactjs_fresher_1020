import React from 'react';
import classes from './index.module.css';

function CartFooter(props) {
    return (
        <React.Fragment>
            <div className={classes.footerShopping}>
                <div className={classes.sumCal}>
                    <p className={classes.sumTotal}>
                        <span classNames={classes.sumTotalInfo}>Tổng tiền:</span>
                        <span classNames={classes.sumTotalPrice}></span>
                    </p>
                    <p className={classes.sumTotalSale}></p>
                </div>
            </div>
            <div className={classes.cartControl}>
                <a href="/" className={classes.backProducts}> Tiếp tục mua hàng</a>
                <a href="#" className={classes.btnOrder}> Đặt hàng </a>
            </div>
        </React.Fragment>
    );
}

export default CartFooter;