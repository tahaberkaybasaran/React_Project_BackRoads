import React from "react";
import { links } from "../data/links";

const PageLinks = ({ parentClassName, childClassName }) => {
  return (
    <>
      <ul className={parentClassName} id={parentClassName}>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className={childClassName}>
                {link.contentText}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PageLinks;
