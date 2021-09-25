import React from "react";
import { useHistory } from "react-router-dom";

import Button from "../Button/Button";

import "./Game-controls.css";

const GameControls = () => {
  const history = useHistory();

  return (
    <div className="game-controls">
      <Button
        text="Start game"
        class="blue-btn"
        onAction={() => history.push("/game")}
      />
      <Button text="Cancel game" class="white-btn" />
    </div>
  );
};

export default GameControls;
