import React from "react";
import Member from "../../../../../pages/Lobby/components/Member-bage/Member-bage";
import { IMember } from "../../../../../ts/interfaces/app_interfaces";

import "./Vote-row.scss";

const VoteRow = ({ player, score }: any) => {
  console.log(player);
  return (
    <div className="vote-row">
      <div className="vote-score">{score ? score : "unknown"}</div>
      <Member
        firstName={player.firstName}
        lastName={player.lastName}
        jobPosition={player.jobPosition}
        gameRole={player.gameRole}
      />
    </div>
  );
};

export default VoteRow;
