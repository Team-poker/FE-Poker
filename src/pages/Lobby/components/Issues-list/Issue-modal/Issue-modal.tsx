import React, { useState, useRef } from "react";
import { connect } from "react-redux";

import { createIssue } from "../../../../../redux/actions";
import Button from "../../Button/Button";

import "./Issue-modal.scss";

const IssueModal = (props: any) => {
  const [enteredIssueTitle, setEnteredIssueTitle] = useState("");
  const [enteredIssueLink, setEnteredIssueLink] = useState("");
  const [enteredIssuePriority, setEnteredIssuePriority] = useState("");

  const priorityRef = useRef(null);

  const handleIssueTitleInput = (e: any) => {
    setEnteredIssueTitle(e.target.value);
  };

  const handleIssueLinkInput = (e: any) => {
    setEnteredIssueLink(e.target.value);
  };

  const handleIssuePrioritySelect = () => {
    setEnteredIssuePriority(priorityRef?.current?.value);
  };

  const handleIssueSubmit = (e: any) => {
    e.preventDefault();
    const newIssue = {
      title: enteredIssueTitle,
      priority: enteredIssuePriority,
      link: enteredIssueLink,
    };
    props.createIssue(newIssue);
    setEnteredIssueTitle('');
    setEnteredIssueLink('');
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
            value={enteredIssueTitle}
          />
        </div>
        <div>
          <label htmlFor="issueLink">Link</label>
          <input type="text" name="issueLink" onInput={handleIssueLinkInput} value={enteredIssueLink} />
        </div>
        <div>
          <label htmlFor="issuePriority">Priority</label>
          <select
            name="issuePriority"
            onChange={handleIssuePrioritySelect}
            ref={priorityRef as any}
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
        <div className="create-issue-buttons">
          <Button type="submit" text="Save" class="blue-btn" />
          {/* <Button type="reset" text="Cancel" class="white-btn" /> */}
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  createIssue,
};

export default connect(null, mapDispatchToProps)(IssueModal);
