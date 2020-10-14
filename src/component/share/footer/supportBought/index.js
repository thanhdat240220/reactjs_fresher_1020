import React from 'react';
import classes from './index.module.css';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';

function SupportBought() {
    return (
        <div className={[classes.supportBoughtList, 'footerListTitle'].join(' ')}>
            <b>Hỗ trợ mua hàng :</b>
            <p className={classes.supportBoughtItem}>
                <span className={classes.spIconPhone}><PhoneOutlinedIcon /></span>
                <a href=''>
                    0904 915 576
                </a>
            </p>
            <p className={classes.supportBoughtItem}>
                <span className={classes.spIconEmail}><EmailOutlinedIcon /></span>
                <a href=''>
                    contact@lovelife.vn
                </a>
            </p>
        </div>
    );
}

export default SupportBought;