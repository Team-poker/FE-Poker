import React from "react";
import { connect } from "react-redux";

import { players } from "../../../../members-data";
import "./Scrum-master.css";

// TO DO: если с бэка пришло фото - отображать фото вместо инициалов в блоке dealer-picture
const ScrumMasterBlock = (props: any) => {
  // const dealer = players.find((player) => player.gameRole === "dealer");
  const initials =
    props.currentUser.firstName.charAt(0) +
    props.currentUser.lastName.charAt(0);

  return (
    <div className="scrum-master">
      <p className="dealer-title">Scrum master:</p>
      <div className="dealer-block">
        <div className="dealer-picture">
          <span className="dealer-initials">{initials}</span>
        </div>
        <div className="dealer-info">
          <span className="dealer-label">It's you</span>
          <p className="dealer-name">{`${props.currentUser.firstName} ${props.currentUser.lastName}`}</p>
          <span className="dealer-title">{props.currentUser.jobPosition}</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, null)(ScrumMasterBlock);
