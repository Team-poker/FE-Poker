import React from "react";

import GameTitle from "../../../Lobby/components/Lobby-title/Lobby-title";
import GameState from "./Game-state/Game-state";
import GameIssues from "./Game-issues/Game-issues";

import "./GameInfo.scss";

const GameInfo = () => {
  return (
    <div className="game-info">
      <GameTitle />
      <GameState />
      <GameIssues />
    </div>
  );
};

export default GameInfo;
