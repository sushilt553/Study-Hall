import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { FETCH_CATEGORIES } from "../../graphql/queries";
import "./sidebar.css";

export default ({ user }) => {
  const { data, loading, error } = useQuery(FETCH_CATEGORIES);

  if (!data || loading || error) return null;

  const categoriesList = data.categories.map((category) => (
    <li className="sidebar-categories-li" key={category._id}>
      <Link className="sidebar-categories-link" to={`/category/${category._id}`}>{category.name}</Link>
    </li>
  ));

  return (
    <div className="sideber-div">
      <div className="sidebar-details">
        <div className="user-name-div">
          <div className="welcome-div">
            <p>Welcome</p>
          </div>
          <div className="user-name">
            <p>{user.username}</p>
          </div>
        </div>
        <div className="mastery-points-div">
          <p className="mp">Mastery Points</p>
          <p className="mastery-points">{user.masteryPoints}</p>
        </div>
        <div className="sidebar-categories-div">
          <ul className="sidebar-categories-ul">{categoriesList}</ul>
        </div>
      </div>
    </div>
  );
};
