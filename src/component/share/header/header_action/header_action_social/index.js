import React from 'react';
import classes from './index.module.css';
import iconImage from '../../../../../assets/icon_image.png';

function HeaderAction(props) {
    return (
        <ul className={[classes.headerActionSocial, 'headerActionList', props.className].join(' ')}>
            <li className={classes.headerActionItem}>
                <a href='' className={classes.socialLink}>
                    <i className={[classes.socialImage, classes.socialKakao].join(' ')}
                        style={{
                            backgroundImage: `url(${iconImage})`
                        }}
                    >&nbsp;</i>
                </a>
            </li>
            <li className={classes.headerActionItem}>
                <a href='' className={classes.socialLink}>
                    <i className={[classes.socialImage, classes.socialFace].join(' ')}
                        style={{
                            backgroundImage: `url(${iconImage})`
                        }}
                    >&nbsp;</i>
                </a>
            </li>
            <li className={classes.headerActionItem}>
                <a href='' className={classes.socialLink}>
                    <i className={[classes.socialImage, classes.socialZalo].join(' ')}
                        style={{
                            backgroundImage: `url(${iconImage})`
                        }}
                    >&nbsp;</i>
                </a>
            </li>
        </ul>
    );
}

export default HeaderAction;