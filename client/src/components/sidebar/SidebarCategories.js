import React from 'react';
import { useQuery } from '@apollo/react-hooks'
import { FETCH_CATEGORIES } from "../../graphql/queries";
import {Link} from 'react-router-dom';
import SidebarPage from './SidebarPage';

export default ({user}) => {

    const { data, loading, error } = useQuery(FETCH_CATEGORIES);

    if (!data || loading || error) return null;

    const categoriesList = data.categories.map((category) => (
        <li className="sidebar-categories-li" key={category._id}>
            <Link
                className="sidebar-categories-link"
                to={`/category/${category._id}`}
            >
                {category.name}
            </Link>
        </li>
    ));
    return (
        <SidebarPage user={user} categoriesList={categoriesList} />
    )
}
