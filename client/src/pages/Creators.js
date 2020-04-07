import React from "react";
import "./assets/CSS/creators.css";

export default () => {
  return (
    <div className="social-containers">
      <h1 className="social-name">Rapkat Amin</h1>
      <div className="social-details-container">
        <label className="link-name">GitHub</label>
        <div className="links-container">
          <a href="https://github.com/rapkat10" className="GitHub-Logo">
            <i className="fab fa-github" />
          </a>
          <label className="link-name">LinkedIn</label>
          <a
            href="https://www.linkedin.com/in/rapkat-amin-33b82b1a4/"
            className="LinkedIn-Logo"
          >
            <i className="fab fa-linkedin" />
          </a>
        </div>
      </div>

      <h1 className="social-name">Sushil Thapa</h1>
      <label className="link-name">GitHub</label>
      <div className="links-container">
        <a href="https://github.com/sushilt553" className="GitHub-Logo">
          <i className="fab fa-github" />
        </a>
        <label className="link-name">LinkedIn</label>
        <a
          href="https://www.linkedin.com/in/sushil-thapa-546800159/"
          className="LinkedIn-Logo"
        >
          <i className="fab fa-linkedin" />
        </a>
      </div>

      <h1 className="social-name">Kadeem Jackson</h1>
      <label className="link-name">GitHub</label>
      <div className="links-container">
        <a href="https://github.com/Cro5s" className="GitHub-Logo">
          <i className="fab fa-github" />
        </a>
        <label className="link-name">LinkedIn</label>
        <a
          href="https://www.linkedin.com/in/kadeem-jackson-4349348a/"
          className="LinkedIn-Logo"
        >
          <i className="fab fa-linkedin" />
        </a>
      </div>
    </div>
  );
};
