import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component, useEffect, useRef, useState } from 'react';
import MySlider from '../share/slide';
import ProductList from './product_list';
import Filter from './filter';
import { _imageLinks, _productList, _categoryList } from '../../utils/data';
import classes from './index.module.css';

function Content(props) {
    console.log('content');

    const _settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true
    };

    let _condition = {
        categoryId: _categoryList.length > 0 ? _categoryList[0].id : 0,
        searchKey: null
    }

    let [productList, setProductList] = useState(_productList);
    let [condition, setCondition] = useState(_condition);

    let productsByCondition = (productList, condition) => {
        return productList.filter((product, i) => {
            let get = true;
            if (product.categoryId !== condition.categoryId)
                get = false;
            if (!!condition.searchKey && !product.productName.toLowerCase().includes(condition.searchKey.toLowerCase()))
                get = false;
            return get;
        });
    }

    useEffect(() => {
        let productListNew = productsByCondition(_productList, condition);
        setProductList(productListNew);
    }, [condition]);

    return (
        <div className={classes.homeMain}>
            <MySlider
                settings={_settings}
                links={_imageLinks}
                height={650}
            />
            <div className='__container_home'>
                <div className='__head_content_home'>
                    <Filter
                        categoryList={_categoryList}
                        setCondition={setCondition}
                        condition={condition}
                    />
                    <ProductList
                        productList={productList}
                    />
                </div>
                <hr className='__hr' />
            </div>
        </div>
    );
}

export default Content;