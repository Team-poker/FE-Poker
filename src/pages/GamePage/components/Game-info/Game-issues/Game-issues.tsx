import React from "react";
import { connect } from "react-redux";
import { IIssue, IState } from "../../../../../ts/interfaces/app_interfaces";
import Issue from "./Issue/Issue";

const GameIssues = (issues: IIssue[]) => {
  const issuesList = issues.map((issue: IIssue) => {
    return <Issue name={issue.issueTitle} />;
  });
  return <ul className="game-issues">{issuesList}</ul>;
};

const mapStateToProps = (state: any) => {
  return {
    issues: state.issues,
  };
};

export default connect(mapStateToProps, null)(GameIssues);
