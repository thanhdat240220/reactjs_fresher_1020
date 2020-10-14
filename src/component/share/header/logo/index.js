import React from 'react';
import classes from './index.module.css';
import logoImage from '../../../../assets/logo.png';

function Logo() {
    return (
        <div className={classes.__logo_header}>
            <p className={classes.p}
                style={{
                    backgroundImage: `url(${logoImage}) `,
                }}>
                <a className={classes.a} href='/'><span></span></a>
            </p>
        </div>
    );
}

export default Logo;