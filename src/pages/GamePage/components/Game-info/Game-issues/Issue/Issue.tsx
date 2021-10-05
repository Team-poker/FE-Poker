import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setActiveIssue } from "../../../../../../redux/actions";

import "./Issue.scss";

const Issue = ({ name, socket, activeIssue, setActiveIssue }: any) => {
  const isActive = name === activeIssue;
  const chooseIssue = () => {
    setActiveIssue(name);
    socket.emit("newActiveIssue", name);
  };
  useEffect(() => {
    socket.on("setActiveIssue", (name: string) => {
      setActiveIssue(name);
    });
  }, [socket]);

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
