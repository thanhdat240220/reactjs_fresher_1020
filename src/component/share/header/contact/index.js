import React from 'react';
import classes from './index.module.css';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';

function Contact() {
    return (
        <div className={classes.headerContact}>
            <ul className={classes.headerContactList}>
                <li className={classes.contactItem}>
                    <a href='' className={classes.contactItemLink}>
                        <span>
                            <PhoneOutlinedIcon className={classes.phoneIcon} fontSize='small' />
                        </span>
                        <span className={classes.phoneSpan}>01234891242</span>
                    </a>
                </li>
                <li className={classes.contactItem}>
                    <a href='' className={classes.contactItemLink}>
                        <span>
                            <EmailOutlinedIcon className={classes.emailIcon} fontSize='small' />
                        </span>
                        <span className={classes.emailSpan}>Email@gmail.com</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Contact;