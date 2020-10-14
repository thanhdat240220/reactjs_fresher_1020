import React from 'react';
import HeaderAction from '../header_action';
import Contact from '../contact';
import classes from './index.module.css';

function HeaderTop() {
    return (
        <div className={classes.frontTop}>
            <Contact />
            <HeaderAction />
        </div>
    );
}

export default HeaderTop;