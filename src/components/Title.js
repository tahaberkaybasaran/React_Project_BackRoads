import React from "react";

const Title = ({ className, text1, text2 }) => {
  return (
    <div className={className}>
      <h2>
        {text1} <span>{text2}</span>
      </h2>
    </div>
  );
};

export default Title;
