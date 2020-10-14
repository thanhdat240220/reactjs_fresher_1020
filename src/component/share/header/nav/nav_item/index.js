import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classes from './index.module.css';

function NavItem(props) {
    return (
        <NavLink className={classes.navItemLink} to={props.navLink} activeClassName={classes._active} exact>
            <span className={classes.navItemInfo}>
                {props.navName}
            </span>
        </NavLink>
    );
}

export default NavItem;