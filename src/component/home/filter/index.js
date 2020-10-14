import React, { useState, useEffect } from 'react';
import classes from './index.module.css';

function Filter(props) {
    console.log(props);
    let [category, setCategory] = useState(props.categoryList.length > 0 ? props.categoryList[0] : {});
    let [searchKey, setSearchKey] = useState(undefined);

    useEffect(() => {
        //
        let conditionClone = Object.assign({}, props.condition)
        conditionClone.categoryId = category.id;
        conditionClone.searchKey = searchKey;
        
        props.setCondition(conditionClone);
    }, [category, searchKey]);

    const renderCategory = () => {
        return props.categoryList.map((category, i) => {
            return (
                <li key={i} >
                    <a href=''
                        className='__category_item'
                        onClick={(e) => {
                            e.preventDefault();
                            setCategory(category);
                        }}>
                        {category.categoryName}
                    </a>
                </li>
            );
        });
    }

    return (
        <div className='__filter_product __row'>
            <div className='__col_8'>
                <div className='__category_bg'>
                    <ul className='__category'>
                        {renderCategory()}
                    </ul>
                </div>
            </div>
            <div className='__col_4'>
                <div className='__search_box_bg'>
                    <input type='text' onChange={(e) => setSearchKey(e.target.value)} />
                </div>
            </div>
        </div>
    );
}

export default Filter;