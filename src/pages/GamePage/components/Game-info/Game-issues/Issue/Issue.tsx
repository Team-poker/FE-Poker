import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setActiveIssue } from "../../../../../../redux/actions";
import { socket } from "../../../../../../App";

import "./Issue.scss";

const Issue = ({ name, activeIssue, setActiveIssue }: any) => {
  useEffect(() => {
    socket.on("setIssue", (name: string) => {
      setActiveIssue(name);
    });
  }, [socket]);
  
  const isActive = name === activeIssue;
  const chooseIssue = (e: any) => {
    e.stopPropagation();
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
  };
};

const mapDispatchToProps = {
  setActiveIssue,
};

export default connect(mapStateToProps, mapDispatchToProps)(Issue);
