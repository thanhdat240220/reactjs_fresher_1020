import React, { Component } from 'react';
import classes from './index.module.css';
import NavItem from './nav_item';

function Nav() {
    const navList = [
        { id: 1, navName: 'Home', link: '/' },
        { id: 2, navName: 'Product', link: '/products' },
        { id: 3, navName: 'Service', link: '/service' },
        { id: 4, navName: 'Contact', link: '/contact' }
    ];

    let renderNavigation = () => {
        return navList.map((nav, i) => {
            return (
                <li className={classes.navItem} key={nav.id}>
                    <NavItem navName={nav.navName} navLink={nav.link} />
                </li>
            )
        })
    }

    return (
        <div className='__front_bot' >
            <div className={classes.headerNav}>
                <ul className={classes.headerNavList}>
                    {renderNavigation()}
                </ul>
            </div>
        </div >
    );
}

export default Nav;