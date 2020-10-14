import React from 'react';
import classes from './index.module.css';
import iconImage from '../../../../assets/icon_image.png';
import HeaderActionSocial from './header_action_social';
import HeaderActionLang from './header_action_lang';
import HeaderActionLogin from './header_action_login';
import HeaderActionCart from './header_action_cart';

function HeaderAction() {
    return (
        <div className={classes.headerAction}>
            <HeaderActionSocial />
            <HeaderActionLang />
            <HeaderActionCart />
            <HeaderActionLogin />
        </div>
    );
}

export default HeaderAction;