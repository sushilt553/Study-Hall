import React from "react";
import { Link } from "react-router-dom";
import "./assets/CSS/footer.css";

export default () => {
  return (
    <div className="footer-container">
      <div className="links-container">
        <h2 className="footer-msg">Created by:</h2>
        <Link className="links" to={`/creators`}>
          Rapkat Amin
        </Link>
        <Link className="links" to={`/creators`}>
          Sushil Thapa
        </Link>
        <Link className="links" to={`/creators`}>
          Kadeem Jackson
        </Link>
      </div>
    </div>
  );
};
