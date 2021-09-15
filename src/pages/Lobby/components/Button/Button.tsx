import React from "react";

import "./Button.css";

const Button = (props: any) => {
  return <button className="blue-btn">{props.text}</button>;
};

export default Button;
