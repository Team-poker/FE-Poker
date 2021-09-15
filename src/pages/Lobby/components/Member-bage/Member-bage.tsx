import React from "react";

import "./Member-bage.scss";

interface IBageProps {
  firstName: string;
  lastName: string;
  jobPosition: string;
  gameRole: string;
}

const MemberBage = (props: IBageProps) => {
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
    </div>
  );
};

export default MemberBage;
