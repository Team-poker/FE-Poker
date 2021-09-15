import React from "react";

import Button from "../Button/Button";

import "./Game-controls.css";

const GameControls = () => {
  return (
    <div className="game-controls">
      <Button text="Start game" class="blue-btn" />
      <Button text="Cancel game" class="white-btn" />
    </div>
  );
};

export default GameControls;
