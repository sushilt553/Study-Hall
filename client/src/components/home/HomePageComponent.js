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

    const categories = data.categories;
    
    let leftcategories = [];
    let rightcategories = [];

    data.categories.forEach((category, i) => {
        if (i % 2 === 0) {
            leftcategories.push(category);
        } else {
            rightcategories.push(category);
        }
    })

    const categoryListLeft = leftcategories.map((category, i) =>
        <li className="single-category" key={category._id}>
            <Link className="li-link-l" to={`/category/${category._id}`} categories={categories}>
                {category.name.toUpperCase()}
            </Link>
        </li>
    ) 

    const categoryListright = rightcategories.map((category, i) =>
        <li className="single-category" key={category._id}>
            <Link className="li-link-r" to={`/category/${category._id}`}>
                {category.name.toUpperCase()}
            </Link>
        </li>
    ) 

    return (
        <div className="categories-div">
            <div className="categories-list-div">
                <h1 className="category-title">Quiz Categories</h1>
                <ul className="categories-list-left">
                    {categoryListLeft}
                </ul>
                <ul className="categories-list-right">
                    {categoryListright}
                </ul>
            </div>
        </div>
            
    )
}
