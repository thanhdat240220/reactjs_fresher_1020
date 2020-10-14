import React from 'react';
import classes from './index.module.css';

function SupportCustomer() {
    return (
        <div className={[classes.supportCustomerList, 'footerListTitle'].join(' ')}>
            <b className={classes.supportCustomerTitle}> Hỗ trợ khách hàng :</b>
            <a className={classes.supportCustomerItem}>Phương thức giao dịch</a>
            <a className={classes.supportCustomerItem}>Phương thức vận chuyển</a>
            <a className={classes.supportCustomerItem}>Phương thức thanh toán</a>
            <a className={classes.supportCustomerItem}>Chính sách bảo hành</a>
            <a className={classes.supportCustomerItem}>Chính sách bảo mật</a>
        </div>
    );
}

export default SupportCustomer;