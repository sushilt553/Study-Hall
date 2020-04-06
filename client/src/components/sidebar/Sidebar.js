import React from 'react';
import {Link} from 'react-router-dom';

export default ({user, categories}) => {

    const categoriesList = categories.map(category => 
        <li key={category._id}><Link to={`/category/${category._id}`}>{category.name}</Link></li>
        )

    return (
        <div className="sidebar-div">
            Welcome {user.username}
            <br/>
            MasteryPoints
            {user.masteryPoints}
            <ul>
                {categoriesList}
            </ul>
        </div>
    )
}