import React from "react";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClassName="footer-links" childClassName="footer-link" />
      <SocialLinks
        parentClassName="footer-links"
        childClassName="footer-link"
      />
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getUTCFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
