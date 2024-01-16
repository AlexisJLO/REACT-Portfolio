import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/Resume">Resume</Link>
          </li>
        </ul>
      </div>

      <div className="footer-socials">
        <ul>
          <li>
            <Link to="https://github.com/AlexisJLO" target="_blank">
              <img src="./public/assets/socials/github.png" alt="github" />
            </Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/alexisjlo/" target="_blank">
              <img src="./src/assets/socials/linkedin.png" alt="Linkedin" />
            </Link>
          </li>
        </ul>
      </div>

      <div className="footer-section disclaimer">
        <p>&copy; Copyright @ 2024. All Rights Reserved.</p>
        <p>Terms of Service | Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
