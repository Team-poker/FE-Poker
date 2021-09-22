import React from "react";

import VoteRow from "./Vote-row/Vote-row";
import { players } from "../../../../members-data";

import "./GameVote.scss";

const GameVote = () => {
  const voteResults = players.map((item) => (
    <VoteRow player={item} key={item.firstName + item.lastName} />
  ));
  return (
    <aside className="game-vote">
      <div className="voting-title">
        <div>Score:</div>
        <div>Players:</div>
      </div>
      {voteResults}
    </aside>
  );
};

export default GameVote;
