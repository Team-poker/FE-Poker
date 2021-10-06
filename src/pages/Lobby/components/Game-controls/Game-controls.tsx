import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import Button from "../Button/Button";
import { isCurrentDealer } from "../../../../utils";
import { socket } from "../../../../App";

import "./Game-controls.css";

const GameControls = ({ issues, cards, currentUser }: any) => {
  const history = useHistory();
  const startGame = () => {
    socket.emit("gameSettings", {
      issues: issues,
      cards: cards,
    });
    history.push("/game");
  };

  const handleCancelGame = () => {
    socket.emit("gameCanceled");
  };

  const handleExitGame = () => {
    socket.emit("exitGame");
  };

  socket.on("confirmedExit", () => {
    history.push("/");
  });

  return (
    <div className="game-controls">
      {isCurrentDealer(currentUser) && (
        <Button text="Start game" class="blue-btn" onAction={startGame} />
      )}
      {isCurrentDealer(currentUser) && (
        <Button
          text="Cancel game"
          class="white-btn"
          onAction={handleCancelGame}
        />
      )}
      {!isCurrentDealer(currentUser) && (
        <Button text="Exit" class="white-btn" onAction={handleExitGame} />
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
