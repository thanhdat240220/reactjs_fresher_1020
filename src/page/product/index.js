import React from 'react';
import Header from '../../component/share/header';
import Footer from '../../component/share/footer';
import ProductMain from '../../component/product';

function ProductPage(props) {
    return (
        <div>
            <Header />
            <ProductMain />
            <Footer />
        </div>
    );
}

export default ProductPage;