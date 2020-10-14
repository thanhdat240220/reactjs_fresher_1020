import React from 'react';
import classes from './index.module.css';
import IconVn from '../../../../../assets/img-language-vn.png';
import IconUs from '../../../../../assets/img-language-en.png';
import IconKr from '../../../../../assets/img-language-korea.png';

function HeaderAction() {
    return (
        <ul className={[classes.headerActionLang, 'headerActionList'].join(' ')}>
            <li className={classes.headerActionItem}>
                <a href='' className={[classes.changeLangue, '_active'].join(' ')}>
                    <img width='24' height='16' className={classes.imgLangue} src={IconVn} />
                </a>
            </li>
            <li className={classes.headerActionItem}>
                <a href='' className={classes.changeLangue}>
                    <img width='24' height='16' className={classes.imgLangue} src={IconUs} />
                </a>
            </li>
            <li className={classes.headerActionItem}>
                <a href='' className={classes.changeLangue}>
                    <img width='24' height='16' className={classes.imgLangue} src={IconKr} />
                </a>
            </li>
        </ul>
    );
}

export default HeaderAction;