import React from "react";

import "./Issue.scss";

const Issue = ({ name }: any) => {
  return <li className="game-issue">{name}</li>;
};

export default Issue;
