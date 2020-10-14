import React from 'react';
import Social from '../../header/header_action/header_action_social';
import classes from './index.module.css';

function SupportContact() {
    return (
        <div className={[classes.supportContactList, 'footerListTitle'].join(' ')}>
            <b className={classes.socialTitle}>Kết nối với chúng tôi :</b>
            <div className={classes.socialList}>
                <Social className={classes.socialFooter} />
            </div>

            <div className={classes.linkAppFooter}>
                <a href='' className={classes.linkAppItem}>
                    <img width='100' height='33' src='https://secondlemon.com/wp-content/uploads/download-android-2.png' />
                </a>
                <a href='' className={classes.linkAppItem}>
                    <img width='100' height='33' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Download_on_iTunes.svg/440px-Download_on_iTunes.svg.png' />
                </a>
            </div>
        </div>
    );
}

export default SupportContact;