import React from "react";
import Button from "../Button/Button";

import "./Game-link.scss";

const GameLink = () => {
  const handleCopyLink = () => {
    console.log("click");
  };

  return (
    <div className="game-link">
      <h2>Link to lobby:</h2>
      <form className="link">
        <input type="text" value="http://pockerplanning.c..."></input>
        <Button onClick={handleCopyLink} text="Copy" class="blue-btn" />
      </form>
    </div>
  );
};

export default GameLink;
