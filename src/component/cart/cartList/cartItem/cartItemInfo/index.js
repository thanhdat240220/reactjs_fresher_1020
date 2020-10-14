import React from 'react';
import classes from './index.module.css';

function CartItemInfo(props) {
    return (
        <React.Fragment>
            <div className={classes.shoppingYield}>
                <figure className={classes.mediaCart}>
                    <div className={classes.cartImg}>
                        <a href="#" className={classes.productLink}>
                            <img src="http://cdn.lovelife.vn/cache/250x250/Aa8gJywgY6MsXDrYmyHK6nApeiUr0q3PqF1B.jpg" alt="" width="97" height="97" />
                        </a>
                    </div>
                    <figcaption className={classes.cartCaption}>
                        <p className={classes.cartParagraph}></p>
                        <h4 className={classes.cartTitle}>
                            <a href="/chungho-m9-undersink-p22?pid=22" className={classes.productLink}>Chungho M9 Undersink</a>
                        </h4>
                    </figcaption>
                </figure>
            </div>
            <div className={classes.shoppingPrice}>
                <p className={classes.shoppingTtl}>Đơn giá: </p>
                <p className={classes.shoppingCoin}>7.225.000&nbsp;₫</p>
            </div>
        </React.Fragment>
    );
}

export default CartItemInfo;