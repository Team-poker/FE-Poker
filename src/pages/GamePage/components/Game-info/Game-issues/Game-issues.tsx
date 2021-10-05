import React from "react";
import { connect } from "react-redux";
import { IIssue, IState } from "../../../../../ts/interfaces/app_interfaces";
import Issue from "./Issue/Issue";

import "./Game-issues.scss";

const GameIssues = ({ issues, socket }: any) => {
  const issuesList = issues.map((issue: IIssue) => {
    return (
      <Issue
        name={issue.title}
        key={issue.title}
        priority={issue.priority}
        socket={socket}
      />
    );
  });
  return (
    <ul className="game-issues">
      {issuesList}
      {issuesList.length === 0 && <p>Add issues to start planning</p>}
      <li className="new-issue">
        <span>Create new Issue</span>
        <img src={require("../../../../../../public/icons/plus.svg")} />
      </li>
    </ul>
  );
};

const mapStateToProps = (state: any) => {
  return {
    issues: state.issues,
  };
};

export default connect(mapStateToProps, null)(GameIssues);
