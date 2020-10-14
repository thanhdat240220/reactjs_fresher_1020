
import React from 'react';
import classes from './index.module.css';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import { Link } from 'react-router-dom';

function HeaderAction() {
    return (
        <div className={[classes.headerActionLogin, 'headerActionList'].join(' ')}>
            <Link className={classes.actionLoginLink} to='/login'>
                <span className={classes.actionLoginIcon}>
                    <PermIdentityOutlinedIcon className={classes.loginIcon} />
                </span>
                <span className={classes.actionLoginInfo}>
                    Đăng nhập
                </span>
            </Link>
        </div>
    );
}

export default HeaderAction;