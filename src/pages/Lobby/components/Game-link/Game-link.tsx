import React from "react";
import Button from "../Button/Button";

import "./Game-link.scss";

const GameLink = () => {
  //TO DO нужно менять линк на игру
  const link = "http://pockerplanning.com/111";
  const handleCopyLink = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard
      .writeText(link)
      .then(() => console.log("Game link copied"))
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  };

  return (
    <div className="game-link">
      <h2>Link to lobby:</h2>
      <form className="link">
        <input type="text" value={link}></input>
        <Button onClick={handleCopyLink} text="Copy" class="blue-btn" />
      </form>
    </div>
  );
};

export default GameLink;
