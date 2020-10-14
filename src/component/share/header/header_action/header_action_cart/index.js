import React from 'react';
import classes from './index.module.css';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

function HeaderAction() {
    return (
        <div className={[classes.headerActionCart, 'headerActionList'].join(' ')}>
            <Link className={classes.actionCartLink} to='/Cart'>
                <span className={classes.cartIcon}>
                    <ShoppingCartOutlinedIcon />
                </span>
            </Link>
        </div>
    );
}

export default HeaderAction;