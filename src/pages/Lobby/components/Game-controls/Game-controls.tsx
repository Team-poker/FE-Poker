import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import Button from "../Button/Button";

import "./Game-controls.css";

const GameControls = ({ socket, issues, cards }: any) => {
  const history = useHistory();
  const startGame = () => {
    socket.emit("gameSettings", {
      issues: issues,
      cards: cards,
    });
    history.push("/game");
  };

  return (
    <div className="game-controls">
      <Button text="Start game" class="blue-btn" onAction={startGame} />
      <Button text="Cancel game" class="white-btn" />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    issues: state.issues,
    cards: state.cards,
  };
};

export default connect(mapStateToProps, null)(GameControls);
