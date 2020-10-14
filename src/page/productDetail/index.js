import React from 'react';
import Header from '../../component/share/header';
import Footer from '../../component/share/footer';
import ProductDetailMain from '../../component/productDetail';

function ProductDetailPage(props) {
    return (
        <React.Fragment>
            <Header />
            <ProductDetailMain />
            <Footer />
        </React.Fragment>
    );
}

export default ProductDetailPage;