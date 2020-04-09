import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { FETCH_CATEGORIES } from "../../graphql/queries";
import SideBar from "../sidebar/Sidebar";
import "./HomePage.css";

export default () => {
  const { data, loading, error } = useQuery(FETCH_CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data || !data.categories) return <p>NO CATEGORY FOUND</p>;

  const categories = data.categories;

  let leftcategories = [];
  let rightcategories = [];

  data.categories.forEach((category, i) => {
    if (i % 2 === 0) {
      leftcategories.push(category);
    } else {
      rightcategories.push(category);
    }
  });

  const categoryListLeft = leftcategories.map((category, i) => (
    <li className={`single-category l-${i}`} key={category._id}>
      <Link
        className="li-link-l"
        to={`/category/${category._id}`}
        categories={categories}
      >
        {category.name.toUpperCase()}
      </Link>
    </li>
  ));

  const categoryListright = rightcategories.map((category, i) => (
    <li className={`single-category r-${i}`} key={category._id}>
      <Link className="li-link-r" to={`/category/${category._id}`}>
        {category.name.toUpperCase()}
      </Link>
    </li>
  ));

  return (
    <div className="homepage-container">
      <SideBar home={true}/>
      <div className="categories-main-div">
        <div className="categories--div">
          <div className="category-title-div">
            <h1 className="category-title">Quiz Categories</h1>
          </div>
          <div className="categories-list-div">
            <ul className="categories-list-left">{categoryListLeft}</ul>
            <ul className="categories-list-right">{categoryListright}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};
