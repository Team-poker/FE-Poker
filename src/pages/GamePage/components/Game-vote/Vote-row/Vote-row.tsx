import React from "react";
import { connect } from "react-redux";
import { Member } from "../../../../../components/Member/Member";
import { IVote } from "../../../../../ts/interfaces/app_interfaces";

import "./Vote-row.scss";

const VoteRow = ({ player, scores, activeIssue, currentUser }: any) => {
  const score = scores.filter((item: IVote) => {
    return (item.issueTitle === activeIssue && item.userId === player.id);
  });
  return (
    <div className="vote-row">
      <div className="vote-score">{scores.length > 0 && score.length > 0 ? score[0].userVote : "In progress"}</div>
      <Member member={player} />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    scores: state.votes,
    activeIssue: state.activeIssue,
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, null)(VoteRow);
