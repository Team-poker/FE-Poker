import React from "react";
import { connect } from "react-redux";

import GameTitle from "../../../Lobby/components/Lobby-title/Lobby-title";
import GameState from "./Game-state/Game-state";
import GameIssues from "./Game-issues/Game-issues";
import RoundControls from "./Round-controls/Round-controls";

import "./GameInfo.scss";
import GameResults from "./Game-results/Game-results";
import { socket } from "../../../../App";
import Card from "../../../Lobby/components/Card/Card";
import IssueModal from "../../../Lobby/components/Issues-list/Issue-modal/Issue-modal";

const GameInfo = ({ activeIssue }: any) => {
  return (
    <div className="game-info">
      <GameTitle isAvailableToEdit={false} />
      <GameState />
      <section className="game-flow">
        <RoundControls />
      </section>
      <section className="game-flow">
        <GameIssues socket={socket} />
        {activeIssue.length > 0 && (
          <div className="cards-game">
            <Card isEditable={false} />
          </div>
        )}
      </section>
      <section className="game-flow">
        <IssueModal />
        <GameResults />
      </section>

      {/* <Statistics /> */}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    activeIssue: state.activeIssue,
  };
};

export default connect(mapStateToProps, null)(GameInfo);
