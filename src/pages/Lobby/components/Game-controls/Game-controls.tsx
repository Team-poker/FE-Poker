import React from "react";

import Button from "../Button/Button";

import "./Game-controls.css";

const GameControls = () => {
  return (
    <div className="game-controls">
      <Button text="Start game" className="blue-btn" />
      <Button text="Cancel game" className="white-btn" />
    </div>
  );
};

export default GameControls;
