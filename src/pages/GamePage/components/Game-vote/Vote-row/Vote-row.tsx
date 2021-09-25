import React from "react";
import { Member } from "../../../../../components/Member/Member";
import { IMember } from "../../../../../ts/interfaces/app_interfaces";

import "./Vote-row.scss";

const VoteRow = ({ player, score }: any) => {
  return (
    <div className="vote-row">
      <div className="vote-score">{score ? score : "unknown"}</div>
      <Member member={player} />
    </div>
  );
};

export default VoteRow;
