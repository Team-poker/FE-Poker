import React from "react";

import "./Member-bage.scss";

interface IBageProps {
  firstName: string;
  lastName: string;
  jobPosition: string;
  gameRole: string;
}

const MemberBage = (props: IBageProps) => {
  console.log(props);
  const initials = props.firstName.charAt(0) + props.lastName.charAt(0);
  return (
    <div className="member-bage">
      <div className="member-picture">
        <span className="member-initials">{initials}</span>
      </div>
      <div className="member-info">
        <p className="member-name">{`${props.firstName} ${props.lastName}`}</p>
        <span className="dealer-title">{props.jobPosition}</span>
      </div>
      <div className="delete-member-icon">
        <img
          src={require("../../../../../public/delete-player-item.svg")}
          alt="Delete member"
        />
      </div>
    </div>
  );
};

export default MemberBage;
