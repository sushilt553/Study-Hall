import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {Link} from 'react-router-dom';
import { FETCH_CATEGORIES, CURRENT_USER } from '../../graphql/queries';
import Sidebar from '../sidebar/Sidebar';
import "./HomePage.css";

export default () => {


    // const { data: dataR, loading: loadingR, error: errorR } = useQuery(
    //     CURRENT_USER,
    //     {
    //         fetchPolicy: 'network-only'
    //     }
    //     );

    // if (loadingR) return <p>Loading...</p>
    // if (errorR) return <p>ERROR</p>
    // if (!dataR) return <p>Not found</p>

    // const user = dataR.me;

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
        <li className={`single-category l-${i}`} key={category._id}>
            <Link className="li-link-l" to={`/category/${category._id}`}>
                {category.name.toUpperCase()}
            </Link>
        </li>
    ) 

    const categoryListright = rightcategories.map((category, i) =>
        <li className={`single-category r-${i}`} key={category._id}>
            <Link className="li-link-r" to={`/category/${category._id}`}>
                {category.name.toUpperCase()}
            </Link>
        </li>
    ) 

    return (
        <div className="categories-div">
            <div className="sidebar">
                {/* <Sidebar user={user} categories={categories}/> */}
            </div>
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
