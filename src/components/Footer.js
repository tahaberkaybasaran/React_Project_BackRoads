import React from "react";
import { links, socialLinks } from "../data/links";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {links.map((link) => {
          const { id, href, contentText } = link;
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {contentText}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((socialLink) => {
          const { id, href, icon } = socialLink;
          return (
            <li key={id}>
              <a
                href={href}
                // target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getUTCFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
