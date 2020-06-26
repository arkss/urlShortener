import React from 'react';
import className from 'classnames';
import styles from './Button.scss';

const cx = className.bind(styles);

const Button = ({ type, onClick, className, value, isInActive }) => {
    let _type;
    if (type === 'submit')
        _type = 'submit';
    else
        _type = 'button';

    return (
        <input
            type={_type}
            onClick={onClick}
            value={value}
            className={cx('ButtonDefault', className, {
                activeButton: isInActive
            })}
        />
    )
};

export default Button;