import React from "react";
import { connect } from "react-redux";

import Issue from "../../../GamePage/components/Game-info/Game-issues/Issue/Issue";
import { createIssue } from "../../../../redux/actions";
import { IIssue } from "../../../../ts/interfaces/app_interfaces";
import IssueModal from "./Issue-modal/Issue-modal";

const IssuesList = ({ issues }: any) => {
  let issuesData: any;
  if (issues.length > 0)
    issuesData = issues.map((issue: IIssue) => (
      <Issue
        name={issue.title}
        key={issue.title}
        priority={issue.priority}
        isAvailableToChoose={false}
      />
    ));

  return (
    <section className="issues">
      {issuesData.length === 0 && <p>Add issues to start planning</p>}
      <ul className="game-issues">
        {issues.length > 0 && issuesData}
        {/* <li className="new-issue" onClick={() => setModalOpened(true)}>
          <span>Create new Issue</span>
          <img src={require("../../../../../public/icons/plus.svg")} />
        </li> */}
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

const mapDispatchToProps = {
  createIssue,
};

export default connect(mapStateToProps, mapDispatchToProps)(IssuesList);
