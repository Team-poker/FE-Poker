import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setActiveIssue } from "../../../../../../redux/actions";
import { socket } from "../../../../../../App";
import { isCurrentDealer } from "../../../../../../utils";

import "./Issue.scss";

const Issue = ({ name, activeIssue, setActiveIssue, currentUser }: any) => {
  useEffect(() => {
    socket.on("setIssue", (name: string) => {
      setActiveIssue(name);
    });
  }, [socket]);
  
  const isActive = name === activeIssue;
  const chooseIssue = (e: any) => {
    e.stopPropagation();
    if (!isCurrentDealer(currentUser)) return;
    setActiveIssue(name);
    socket.emit("newActiveIssue", (name));
  };

  return (
    <li
      className={isActive ? "game-issue game-issue_active" : "game-issue"}
      onClick={chooseIssue}
    >
      <span>{name}</span>
      <img src={require("../../../../../../../public/icons/cross.svg")} />
    </li>
  );
};

const mapStateToProps = (state: any) => {
  return {
    activeIssue: state.activeIssue,
    currentUser: state.currentUser,
  };
};

const mapDispatchToProps = {
  setActiveIssue,
};

export default connect(mapStateToProps, mapDispatchToProps)(Issue);
