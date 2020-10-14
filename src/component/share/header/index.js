import React from 'react';
import Nav from './nav';
import Logo from './logo';
import HeaderMain from './header_main';
import clases from './index.module.css';

function Header() {
    return (
        <div className={clases.header}>
            <div className='container'>
                <Logo />
                <HeaderMain />
            </div>
        </div>
    );
}

export default Header;