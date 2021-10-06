import React from "react";

import GameTitle from "../../../Lobby/components/Lobby-title/Lobby-title";
import GameState from "./Game-state/Game-state";
import GameIssues from "./Game-issues/Game-issues";
import RoundControls from "./Round-controls/Round-controls";

import "./GameInfo.scss";
import GameResults from "./Game-results/Game-results";

const GameInfo = (socket: any) => {
  return (
    <div className="game-info">
      <GameTitle />
      <GameState />
      <section className="game-flow">
        <GameIssues socket={socket} />
        <GameResults />
      </section>
      <RoundControls />
      {/* <Statistics /> */}
    </div>
  );
};

export default GameInfo;
