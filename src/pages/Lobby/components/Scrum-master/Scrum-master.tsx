import React from "react";
import { connect } from "react-redux";

import { isCurrentUser } from "../../../../utils";
import "./Scrum-master.css";

// TO DO: если с бэка пришло фото - отображать фото вместо инициалов в блоке dealer-picture
const ScrumMasterBlock = (props: any) => {
  const dealer = props.usersList.find((player: any) => player.dealer === true);
  const initials = dealer.firstName.charAt(0) + dealer.lastName.charAt(0);
  const current = isCurrentUser(dealer.id, props.currentUser.id);

  return (
    <div className="scrum-master">
      <p className="dealer-title">Scrum master:</p>
      <div className="dealer-block">
        <div className="dealer-picture">
          <span className="dealer-initials">{initials}</span>
        </div>
        <div className="dealer-info">
          {current && <span className="dealer-label">It's you</span>}
          <p className="dealer-name">{`${dealer.firstName} ${dealer.lastName}`}</p>
          <span className="dealer-title">{dealer.jobPosition}</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    usersList: state.usersList,
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, null)(ScrumMasterBlock);
