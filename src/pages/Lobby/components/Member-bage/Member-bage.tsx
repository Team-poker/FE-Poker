import React from "react";

import "./Member-bage.scss";

interface IBageProps {
  firstName: string;
  lastName: string;
  jobPosition: string;
  dealer: boolean;
  current: boolean;
}

const MemberBage = (props: IBageProps) => {
  const initials =
    props.firstName.charAt(0).toUpperCase() +
    props.lastName.charAt(0).toUpperCase();
  return (
    <div className="member-bage">
      <div className="member-picture">
        <span className="member-initials">{initials}</span>
      </div>
      <div className="member-info">
        {props.current && <span className="dealer-label">It's you</span>}
        <p className="member-name">{`${props.firstName} ${props.lastName}`}</p>
        <span className="dealer-title">{props.jobPosition}</span>
      </div>
      {!props.current && (
        <div className="delete-member-icon">
          <img
            src={require("../../../../../public/delete-player-item.svg")}
            alt="Delete member"
          />
        </div>
      )}
    </div>
  );
};

export default MemberBage;
