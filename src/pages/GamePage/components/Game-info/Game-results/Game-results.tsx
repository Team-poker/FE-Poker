import React from "react";
import { connect } from "react-redux";

import { isAllMembersVoted } from "../../../../../utils";
import { isCurrentDealer } from "../../../../../utils";

// import "./Game-resuts.scss";

const GameResults = (props: any) => {
  const isVotingFinished = isAllMembersVoted(
    props.usersList,
    props.votes,
    props.activeIssue
  );
  return (
    <div className="results-cards">
      {isCurrentDealer(props.currentUser) && props.activeIssue.length === 0 && (
        <p>Choose an Issue to start voting</p>
      )}
      {props.activeIssue.length > 0 && !isVotingFinished && (
        <p>Members are voting...</p>
      )}
      {isVotingFinished && (
        <h2>{`Voting on Issue ${props.activeIssue} is finished`}</h2>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    usersList: state.usersList,
    activeIssue: state.activeIssue,
    votes: state.votes,
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, null)(GameResults);
