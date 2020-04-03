import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import { FETCH_CATEGORIES } from '../../graphql/queries';

export default () => {

    const {data, loading, error} = useQuery(FETCH_CATEGORIES)

    if (loading) return <p>Loading...</p>
    if (error) return <p>ERROR</p>
    if (!data || !data.categories) return <p>NO CATEGORY FOUND</p>

    const categoryList = data.categories.map(category => <li key={category._id}>{category.name.toUpperCase()}</li>) 

    return (
        <ul>
            {categoryList}
        </ul>
    )
}
