import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {Link} from 'react-router-dom';
import { FETCH_CATEGORIES } from '../../graphql/queries';
import "./HomePage.css";

export default () => {
    const {data, loading, error} = useQuery(FETCH_CATEGORIES)

    if (loading) return <p>Loading...</p>
    if (error) return <p>ERROR</p>
    if (!data || !data.categories) return <p>NO CATEGORY FOUND</p>

    const categoryList = data.categories.map(category => <li className="single-category" key={category._id}><Link to={`/category/${category._id}`}>{category.name.toUpperCase()}</Link></li>) 

    return (
        <ul className="categories-list">
            {categoryList}
        </ul>
    )
}
