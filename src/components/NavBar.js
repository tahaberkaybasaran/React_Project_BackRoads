import React from "react";
import logo from "../images/logo.svg";
import { links, socialLinks } from "../data/links.js";

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
                <a href={link.href} className="nav-link">
                  {link.contentText}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((socialLink) => {
            const { id, href, icon } = socialLink;
            return (
              <li key={id}>
                <a
                  href={href}
                  // target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
