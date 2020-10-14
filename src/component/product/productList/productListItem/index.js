import React from 'react';
import classes from './index.module.css';
import { Link } from 'react-router-dom';
// import utilHelper from '../../../../utils/helper';

function ProductListItem(props) {
    return (
        <div className={classes.productListItem}>
            <div className={classes.productItemInner} key={props.info.id}>
                <div className={classes.productImg}>
                    <Link to={'/product/' + props.info.id} className={classes.productImgLink}>
                        <img className={classes.productTagImg} src={props.info.thumbnail_url} />
                    </Link>
                    <div className={classes.productAction}>
                        <button className={classes.actionAdd}>Thêm giỏ hàng</button>
                        <button className={classes.actionBought}>Mua hàng</button>
                    </div>
                </div>
                <div className={classes.productInfo}>
                    <h4 className={classes.productTitle}>
                        <Link to={'/product/' + props.info.id} className={classes.productTitleLink}>{props.info.name}</Link>
                    </h4>
                    <p className={classes.productPrice}>
                        <span className={classes.productPriceCur}>{props.info.price.toLocaleString()} ₫</span>
                        {
                            props.info.price !== props.info.list_price ?
                                <span className={classes.productPriceDef}> {props.info.list_price} ₫</span> :
                                false
                        }
                    </p>
                    {
                        props.info.is_rentable ?
                            <p className={classes.productRent}>
                                <span className={classes.rentInfo}>Giá thuê:</span>
                                <span className={classes.rentPrice}>{props.info.rent_price.toLocaleString()} ₫</span>
                            </p>
                            : false
                    }

                </div>
            </div>
        </div >
    );
}

export default ProductListItem;