import React from "react";

import GameTitle from "../../../Lobby/components/Lobby-title/Lobby-title";
import GameState from "./Game-state/Game-state";
import GameIssues from "./Game-issues/Game-issues";
import RoundControls from "./Round-controls/Round-controls";

import "./GameInfo.scss";
import GameResults from "./Game-results/Game-results";
import { socket } from "../../../../App";
import Card from "../../../Lobby/components/Card/Card";

const GameInfo = ({activeIssue}: any) => {
  return (
    <div className="game-info">
      <GameTitle />
      <GameState />
      <section className="game-flow">
        <GameIssues socket={socket} />
        {activeIssue.length > 0 && <div className="cards-game">
                      <Card isEditable={false} />
                  </div>}
        <RoundControls />
        <GameResults />
      </section>
      {/* <RoundControls /> */}
      {/* <Statistics /> */}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    activeIssue: state.activeIssue,
  };
}

export default connect(mapStateToProps, null)(GameInfo);
