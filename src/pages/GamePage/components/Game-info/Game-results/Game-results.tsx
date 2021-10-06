import React from "react";
import { connect } from "react-redux";
import { ICard, IVote } from "../../../../../ts/interfaces/app_interfaces";

import { isAllMembersVoted } from "../../../../../utils";
import { isCurrentDealer } from "../../../../../utils";

import "./Game-results.scss";

interface Dictionary {
  [index: string]: number;
}

const GameResults = (props: any) => {
  const isVotingFinished = isAllMembersVoted(
    props.usersList,
    props.votes,
    props.activeIssue
  );
  const issueVotingData = props.votes.filter(
    (vote: IVote) => vote.issueTitle === props.activeIssue
  );
  const cardTitles = props.cards.map((card: ICard) => card.title);
  const cardsRow = [...cardTitles].map((title: string) => (
    <td key={title + "-headline"} className="results-cell">
      {title}
    </td>
  ));
  const numberOfVoters = props.usersList.length;
  const avgRow = [...cardTitles].map((title: string) => {
    let avgCount = 0;
    for (let i = 0; i < issueVotingData.length; i++) {
      console.log(issueVotingData[i]);
      if (title === issueVotingData[i].userVote) avgCount++;
    }
    return (
      <td key={title} className="results-cell">
        {String((avgCount / numberOfVoters) * 100) + "%"}
      </td>
    );
  });

  return (
    <div className="results-cards">
      {isCurrentDealer(props.currentUser) && props.activeIssue.length === 0 && (
        <h2>Choose an Issue to start voting</h2>
      )}
      {props.activeIssue.length > 0 && !isVotingFinished && (
        <h2>Members are voting...</h2>
      )}
      {isVotingFinished && (
        <>
          <h2>{`Voting on Issue ${props.activeIssue} is finished`}</h2>
          <div className="voting-results">
            <table>
              <tbody>
                <tr>{cardsRow}</tr>
                <tr>{avgRow}</tr>
              </tbody>
            </table>
          </div>
        </>
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
    cards: state.cards,
  };
};

export default connect(mapStateToProps, null)(GameResults);
