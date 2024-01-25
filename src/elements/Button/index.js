import React from "react";
import "./Button.css";

const Button = ({ onClick, label = "button", type }) => {
  return (
    <>
      <div className={type === "link" ? "link" : "btn"} onClick={onClick}>
        {label}
      </div>
    </>
  );
};

export default Button;
