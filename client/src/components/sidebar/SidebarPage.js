import React from 'react';
import {useQuery} from "@apollo/react-hooks";
import {Link} from 'react-router-dom';
import { FETCH_CATEGORIES } from '../../graphql/queries';

export default ({user}) => {
    const { data, loading, error } = useQuery(FETCH_CATEGORIES)

    if (!data || loading || error) return null;

    const categoriesList = data.categories.map(category => 
        <li key={category._id}><Link to={`/category/${category._id}`}>{category.name}</Link></li>
        )

    return (
        <div>
            <p>Welcome {user.username}</p>
            {user.masteryPoints}
            <ul>
                {categoriesList}
            </ul>
        </div>
    )
}