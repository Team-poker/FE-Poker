import React from "react";
import { connect } from "react-redux";

import IssueItem from "./Issue-Item/Issue-Item";
import NewIssue from "./New-Issue/New-Issue";
import { createIssue } from "../../../../redux/actions";
import { IIssue } from "../../../../ts/interfaces/app_interfaces";
import IssueModal from "./Issue-modal/Issue-modal";

const IssuesList = ({ issues }: any) => {
  const issuesData = issues.map((issue: IIssue) => (
    <IssueItem
      title={issue.title}
      priority={issue.priority}
      key={issue.title + issue.priority}
    />
  ));
  return (
    <section className="issues">
      <h2>Issues</h2>
      <ul className="issues-list">{issuesData}</ul>
      <IssueModal />
    </section>
  );
};

const mapStateToProps = (state: any) => {
  return {
    issues: state.issues,
  };
};

const mapDispatchToProps = {
  createIssue,
};

export default connect(mapStateToProps, mapDispatchToProps)(IssuesList);
