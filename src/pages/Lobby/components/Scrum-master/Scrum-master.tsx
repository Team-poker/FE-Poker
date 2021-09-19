import React from "react";

import { players } from "../../../../members-data";
import "./Scrum-master.css";

// TO DO: если с бэка пришло фото - отображать фото вместо инициалов в блоке dealer-picture
const ScrumMasterBlock = () => {
  const dealer = players.find((player) => player.gameRole === "dealer");
  const initials = dealer.firstName.charAt(0) + dealer.lastName.charAt(0);

  return (
    <div className="scrum-master">
      <p className="dealer-title">Scrum master:</p>
      <div className="dealer-block">
        <div className="dealer-picture">
          <span className="dealer-initials">{initials}</span>
        </div>
        <div className="dealer-info">
          <span className="dealer-label">It's you</span>
          <p className="dealer-name">{`${dealer.firstName} ${dealer.lastName}`}</p>
          <span className="dealer-title">{dealer.jobPosition}</span>
        </div>
      </div>
    </div>
  );
};

export default ScrumMasterBlock;
