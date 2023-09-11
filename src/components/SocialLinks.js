import React from "react";
import { socialLinks } from "../data/links";

const SocialLinks = ({ parentClassName, childClassName }) => {
  return (
    <>
      <ul className={parentClassName}>
        {socialLinks.map((socialLink) => {
          const { id, href, icon } = socialLink;
          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className={childClassName}
              >
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SocialLinks;
