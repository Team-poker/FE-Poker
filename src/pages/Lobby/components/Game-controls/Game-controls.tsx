import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import Button from "../Button/Button";
import { isCurrentDealer } from "../../../../utils";

import "./Game-controls.css";

const GameControls = ({ socket, issues, cards, currentUser }: any) => {
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
      {isCurrentDealer(currentUser) && (
        <Button text="Start game" class="blue-btn" onAction={startGame} />
      )}
      {isCurrentDealer(currentUser) && (
        <Button text="Cancel game" class="white-btn" />
      )}
      {!isCurrentDealer(currentUser) && (
        <Button text="Exit" class="white-btn" />
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    issues: state.issues,
    cards: state.cards,
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, null)(GameControls);
