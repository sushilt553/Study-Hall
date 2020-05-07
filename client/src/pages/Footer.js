import React from "react";
import { Link } from "react-router-dom";
import "./assets/CSS/footer.css";

export default () => {
  return (
    <div className="footer-container">
      <div className="footer-links-container">
        <Link className="links" to={`/creators`}><button className="footer-msg">About Us</button></Link>
      </div>
    </div>
  );
};
