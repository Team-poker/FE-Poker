import React from "react";

import "./Issue.scss";

const Issue = ({ name }: any) => {
  return (
    <li className="game-issue">
      <span>{name}</span>
      <img src={require("../../../../../../../public/icons/cross.svg")} />
    </li>
  );
};

export default Issue;
