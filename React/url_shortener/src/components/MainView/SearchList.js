import React from 'react';
import className from 'classnames';
import styles from './SearchList.scss';

const cx = className.bind(styles);

const SearchList = ({ searchs }) => {
    return (
        <div className={cx('SearchList')}>{searchs}</div>

    )
}

export default SearchList;