import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="links-container">
        <h2 className="footer-msg">Created by: </h2>
        <Link className="links" to={`/Creators`}>
          Rapkat Amin
        </Link>
        <h3 className="links">Sushil Thapa</h3>
        <h3 className="links">Kadeem Jackson</h3>
      </div>
    </div>
  );
}

export default Footer;
