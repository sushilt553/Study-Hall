import React from 'react';
import CategoryShow from '../components/category/CategoryShow';

export default (ownProps) => {
    const categoryId = ownProps.match.params.categoryId;
    return (
        <CategoryShow categoryId={categoryId}/>
    )
}