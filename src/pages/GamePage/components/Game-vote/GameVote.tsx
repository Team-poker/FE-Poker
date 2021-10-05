import React, { useEffect } from "react";
import { connect } from "react-redux";

import VoteRow from "./Vote-row/Vote-row";

import "./GameVote.scss";

const GameVote = (props: any) => {
  // const players = props.usersList.filter((player: any) => !player.dealer);
  const players = props.usersList;
  
  const voteResults = players.map((item: any) => (
    <VoteRow player={item} key={item.id} />
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

const mapStateToProps = (state: any) => {
  return {
    usersList: state.usersList,
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, null)(GameVote);
