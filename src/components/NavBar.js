import React from "react";
import logo from "../images/logo.svg";
import { links } from "../data/links";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <a href="#home" className="nav-link">
            <img src={logo} className="nav-logo" alt="backroads" />
          </a>
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} target="_blank" className="nav-link">
                  {link.contentText}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="nav-icon"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="nav-icon"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="nav-icon"
            >
              <i className="fab fa-squarespace"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
