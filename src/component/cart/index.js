import React from 'react';
import classes from './index.module.css';
import ListProductShopping from './cartList';
import CartFooter from './cartFooter';
import * as CartAction from '../../actions/cartAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function CartMain(props) {
    const { products, actions } = this.props;
    return (
        <React.Fragment>
            <div className={classes.cartMain}>
                <div className={classes.cartMainInner}>
                    <div className={classes.cartHead}>
                        <div className={classes.cartHeadTitle}>
                            <h2 className={classes.cartTitle}>Giỏ hàng</h2>
                        </div>
                    </div>
                    <div className={classes.cartProductList}>
                        <div className={classes.cart}>
                            <ListProductShopping products={products} />
                            <CartFooter />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

function mapStateToProps(state) {
    return {
        products: state.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(CartAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartMain);