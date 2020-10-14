import React from 'react';
import SupportBought from './supportBought';
import SupportTech from './supportTech';
import SupportContact from './supportContact';
import SupportCustomer from './supportCustomer';
import classes from './index.module.css';

function Footer() {
    return (
        <div className={classes.footer}>
            <div className={[classes.footerInner, 'footerInner'].join(' ')}>
                <div className='container'>
                    <div className='__row'>
                        <div className='__col_3'>
                            <SupportCustomer />
                        </div>
                        <div className='__col_3'>
                            <SupportBought />
                        </div>
                        <div className='__col_3'>
                            <SupportTech />
                        </div>
                        <div className='__col_3'>
                            <SupportContact />
                        </div>
                    </div>
                    <hr className='__hr' />
                    <div className='__f_copyright'>
                        @ copy right
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;