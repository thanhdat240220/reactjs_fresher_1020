import React, { useEffect, useState } from 'react';
import classes from './index.module.css';

function CategoryFilter(props) {
    const [category, setCategory] = useState( props.categories.length > 0 ? props.categories[0] : 0);

    useEffect(() => {
        let conditionClone = Object.assign({}, props.condition)
        conditionClone.categoryId = category.id;

        props.setCondition(conditionClone);
    }, [category]);

    const renderCategory = () => {
        return props.categories.map((c, i) => {
            return (
                <li key={c.id}>
                    <a href='' className={c.id === category.id ? classes.categoryLinkActive : classes.categoryLink}
                        onClick={(e) => { e.preventDefault(); setCategory(c); }}
                    >
                        {c.categoryName}
                    </a>
                </li>
            );
        })
    }

    return (
        <ul className={classes.categoryList}>
            {renderCategory()}
        </ul>
    );
}

export default CategoryFilter;