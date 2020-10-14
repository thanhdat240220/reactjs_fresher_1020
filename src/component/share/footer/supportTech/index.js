import React from 'react';
import classes from './index.module.css';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';

function supportTech() {
    return (
        <div className={[classes.supportCustomerList, 'footerListTitle'].join(' ')}>
            <b>Hỗ trợ kỹ thuật :</b>
            <p className={classes.supportBoughtItem}>
                <span className={classes.spIconPhone}><PhoneOutlinedIcon /></span>
                <a href=''>
                    024 6654 6992
                </a>
            </p>
            <p className={classes.supportBoughtItem}>
                <span className={classes.spIconEmail}><EmailOutlinedIcon /></span>
                <a href=''>
                    lovelife-support@email.com.vn
                </a>
            </p>
        </div>
    );
}

export default supportTech;