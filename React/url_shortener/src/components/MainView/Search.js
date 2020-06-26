import React from 'react';
import className from 'classnames';
import styles from './Search.scss';
import Button from './Button';

const cx = className.bind(styles);

const Search = ({ id, shorten, origin_url }) => {
    return (
        <div className={cx('Search')}>
            <div>{origin_url}</div>
            <div className={cx('shorten-wapper')}>
                <div className={cx('shorten')}>http://localhost:3000/{shorten}</div>
                <Button
                    className={'copyButton'}
                    value={'copy'}
                />
            </div>
        </div>
    )
}

export default Search;