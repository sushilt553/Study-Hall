import React from 'react';

export default ({user, categories}) => {

    const categoriesList = categories.map(category => 
        <li key={category._id}>{category.name}</li>
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