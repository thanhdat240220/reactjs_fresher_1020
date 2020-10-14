import React, { useEffect } from 'react';
import classes from './index.module.css';
import CategoryFilter from './category_filter';
import SearchFilter from './search_filter';

function FilterProduct(props) {
    console.log(props);

    return (
        <div className={classes.filter}>
            <div className={classes.filterInner}>
                <div className={classes.categoryFilter}>
                    <CategoryFilter
                        categories={props.categories}
                        setCondition={props.setCondition}
                        condition={props.condition}
                    />
                </div>
                <div className={classes.searchFilter}>
                    <SearchFilter
                        setCondition={props.setCondition}
                        condition={props.condition}
                    />
                </div>
            </div>
        </div>
    );
}

export default FilterProduct;