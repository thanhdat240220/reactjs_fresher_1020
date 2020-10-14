import React, { useState, useEffect } from 'react';
import classes from './index.module.css';

function SearchFilter(props) {
    const [searchKey, setSearchKey] = useState(null);

    useEffect(() => {
        let conditionClone = Object.assign({}, props.condition)
        conditionClone.searchKey = searchKey;

        props.setCondition(conditionClone);
    }, [searchKey]);

    return (
        <div className={classes.searchInner}>
            <input type='text' name='searchKey' placeholder='Tìm kiếm' className={classes.inputSearch}
                onChange={(e) => setSearchKey(e.target.value)}
            />
        </div>
    );
}

export default SearchFilter;