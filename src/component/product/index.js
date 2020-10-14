import React, { useEffect, useState } from 'react';
import classes from './index.module.css';
import ProductList from './productList';
import { _productList2, _categoryList } from '../../utils/data';
import Filter from './filter_product';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProductActions from '../../actions/productAction';

function ProductMain(props) {
    console.log(props);

    let _condition = {
        categoryId: _categoryList.length > 0 ? _categoryList[0].id : 0,
        searchKey: null
    }

    const [productList, setProductList] = useState(_productList2.data.products);
    const [condition, setCondition] = useState(_condition);

    const productsByCondition = (productList, condition) => {
        return productList.filter((product, i) => {
            let get = true;
            if (product.categoryId !== condition.categoryId)
                get = false;
            if (!!condition.searchKey && !product.name.toLowerCase().includes(condition.searchKey.toLowerCase()))
                get = false;
            return get;
        });
    }

    useEffect(() => {
        let productListNew = productsByCondition(_productList2.data.products, condition);
        setProductList(productListNew);
    }, [condition]);

    

    return (
        <div className={classes.productMain}>
            <div className={classes.productMainInner}>
                <Filter
                    condition={condition}
                    categories={_categoryList}
                    setCondition={setCondition}
                />
                <ProductList
                    productList={productList}
                />
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ProductActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductMain);