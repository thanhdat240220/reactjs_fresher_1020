import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import classes from './index.module.css';
import Slick from '../share/slide';
import { _imageLinks } from '../../utils/data';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function ProductDetailMain(props) {
    const { productId } = useParams();
    console.log(props, productId);

    const [productDetail, setProductDetail] = useState();

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://lovelife.vn/api/v1/products/' + productId,
        }).then((res) => {
            setProductDetail(res.data.data);
            console.log(res);
        })
    }, []);

    const _settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true
    };

    const renderProductSlick = () => {
        const linkImgs = productDetail.images.map(img => img.medium_url);
        console.log(linkImgs);
        return (
            <div className={classes.slickSlider}>
                <div className={classes.slickSliderInner}>
                    <Slick
                        height={368}
                        links={linkImgs}
                        settings={_settings}
                        cusContainerSlider={classes.cusContainerSlider}
                        cusClassSlider={classes.cusClassSlider}
                    />
                </div>
            </div>
        )
    }

    const renderProductInfo = () => {
        return (
            <div className={classes.productInfo}>
                <div className={classes.productInfoInner}>
                    <div className={classes.productInfoDes}>
                        <p className={classes.productType}>{productDetail.model}</p>
                        <h3 className={classes.productName}>{productDetail.name}</h3>
                        <p className={classes.productDes}>{productDetail.short_description}</p>
                    </div>
                    <div className={classes.price}>
                        <div className={classes.priceStatus}>
                            <span className={classes.priceCalculate}>{productDetail.price.toLocaleString()} ₫</span>
                            <span className={classes.priceDef}>{productDetail.list_price.toLocaleString()} ₫</span>
                        </div>
                        {
                            productDetail.is_rentable &&
                            <div className={classes.rent}>
                                <span className={classes.priceRentInfo}>Giá thuê :</span>
                                <span className={classes.priceRent}>{productDetail.rent_price.toLocaleString()} ₫</span>
                            </div>
                        }
                    </div>
                    <div className={classes.quantity}>
                        <div className={classes.quantityInfo}>Số lượng :</div>
                        <div className={classes.quantityButton}>
                            <div className={classes.groundButton}>
                                <button className={[classes.buttonItem, classes.buttonDecrement].join(' ')}>
                                    <AddIcon className={classes.iconClass} />
                                </button>
                                <input className={classes.inputQuantity} type='text' value='1' />
                                <button className={[classes.buttonItem, classes.buttonIncrement].join(' ')}>
                                    <RemoveIcon className={classes.iconClass} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

    const renderProductDetail = () => {
        if (productDetail) {
            return (
                <React.Fragment>
                    {renderProductSlick()}
                    {renderProductInfo()}
                </React.Fragment>
            );
        } else {
            return (<div>Loading</div>);
        }
    }

    return (
        <div className={classes.productDetailMain} >
            <div className={classes.productDetailMainInner}>
                {renderProductDetail()}
            </div>
        </div>
    );
}

export default ProductDetailMain;