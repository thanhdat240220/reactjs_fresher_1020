import React from 'react';
import Header from '../../component/share/header';
import Footer from '../../component/share/footer';
import CartMain from '../../component/cart';

function CartPage(props) {
    return (
        <React.Fragment>
            <Header />
            <CartMain />
            <Footer />
        </React.Fragment>
    );
}

export default CartPage;