import React from "react";

import GameTitle from "../../../Lobby/components/Lobby-title/Lobby-title";
import GameState from "./Game-state/Game-state";
import GameIssues from "./Game-issues/Game-issues";
import RoundControls from "./Round-controls/Round-controls";

import "./GameInfo.scss";
import { connect } from "react-redux";
import Card from "../../../Lobby/components/Card/Card";
import { socket } from "../../../../App";

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
      </section>
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
