import React from "react";
import { connect } from "react-redux";
import { IIssue, IState } from "../../../../../ts/interfaces/app_interfaces";
import Issue from "./Issue/Issue";

import "./Game-issues.scss";
import IssueModal from "../../../../Lobby/components/Issues-list/Issue-modal/Issue-modal";

const GameIssues = ({ issues }: any) => {
  const issuesList = issues.map((issue: IIssue) => {
    return (
      <Issue
        name={issue.title}
        key={issue.title}
        priority={issue.priority}
        isAvailableToChoose={true}
      />
    );
  });
  return (
    <section className="issues">
      <ul className="game-issues">
        {issuesList}
        {issuesList.length === 0 && <p>Add issues to start planning</p>}
      </ul>
      <IssueModal />
    </section>
  );
};

const mapStateToProps = (state: any) => {
  return {
    issues: state.issues,
  };
};

export default connect(mapStateToProps, null)(GameIssues);
