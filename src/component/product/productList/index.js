import React from 'react';
import classes from './index.module.css';
import ProductListItem from './productListItem';

function ProductList(props) {
    const renderProducts = () => {
        if (props.productList && props.productList.length > 0)
            return props.productList.map((product, i) => {
                return (<ProductListItem info={product} key={product.id} />);
            });
        else
            return <div>Không tìm thấy sản phẩm</div>
    };

    return (
        <div className={classes.productList}>
            {renderProducts()}
        </div>
    );
}

export default ProductList;