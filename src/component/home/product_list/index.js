import React from 'react';

function ProductList(props) {
    const renderProduct = () => {
        console.log('render product')
        return props.productList.map((product, i) => {
            return (<a className='__product_item' href='' key={i}>
                <div className='__img_product'>
                    <img src={product.imgLink} />
                </div>
                <p className='__product_name'>{product.productName}</p>
                <p className='__product_price'>{product.productPrice}</p>
            </a>)
        });
    }
    
    return (
        <div className='__product_list_bg'>
            <div className='__product_list'>
                {renderProduct()}
            </div>
        </div>
    );
}

export default ProductList;