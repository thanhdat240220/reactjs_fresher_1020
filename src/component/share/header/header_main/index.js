import React from 'react';
import classes from './index.module.css';
import HeaderTop from '../headertop/index';
import Nav from '../nav';

function Logo() {
    return (
        <div className={classes.headerMain}>
            <div className={classes.headerMainInner}>
                <HeaderTop />
                <Nav />
            </div>
        </div>
    );
}

export default Logo;