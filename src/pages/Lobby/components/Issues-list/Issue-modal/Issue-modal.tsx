import React, { useState } from "react";
import { connect } from "react-redux";

import { createIssue } from "../../../../../redux/actions";
import Button from "../../Button/Button";

import "./Issue-modal.scss";

const IssueModal = (props: any) => {
  const [enteredIssueTitle, setEnteredIssueTitle] = useState("");
  const [enteredIssueLink, setEnteredIssueLink] = useState("");
  const [enteredIssuePriority, setEnteredIssuePriority] = useState("");

  const handleIssueTitleInput = (e: any) => {
    setEnteredIssueTitle(e.target.value);
  };

  const handleIssueLinkInput = (e: any) => {
    setEnteredIssueLink(e.target.value);
  };

  const handleIssuePrioritySelect = (e: any) => {
    console.log(e);
    setEnteredIssuePriority(e.value);
  };

  const handleIssueSubmit = (e: any) => {
    e.preventDefault();
    const newIssue = {
      title: enteredIssueTitle,
      priority: enteredIssuePriority,
    };
    props.createIssue(newIssue);
  };

  return (
    <div className="issue-modal">
      <h2>Create Issue</h2>
      <form className="issue-form" onSubmit={handleIssueSubmit}>
        <div>
          <label htmlFor="issueTitle">Title</label>
          <input
            type="text"
            name="issueTitle"
            onInput={handleIssueTitleInput}
          />
        </div>
        <div>
          <label htmlFor="issueLink">Link</label>
          <input type="text" name="issueLink" onInput={handleIssueLinkInput} />
        </div>
        <div>
          <label htmlFor="issuePriority">Priority</label>
          <select name="issuePriority" onChange={handleIssuePrioritySelect}>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
        <div className="create-issue-buttons">
          <Button type="submit" text="Yes" class="blue-btn" />
          <Button type="reset" text="No" class="white-btn" />
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  createIssue,
};

export default connect(null, mapDispatchToProps)(IssueModal);
