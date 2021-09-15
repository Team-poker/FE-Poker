import React from "react";

import { players } from "../../../../members-data";
import MemberBage from "../Member-bage/Member-bage";

import "./Members-list.css";

const MembersList = () => {
  const members = players.filter((player) => player.gameRole !== "dealer");
  const membersItems = members.map((member) => {
    return (
      <MemberBage
        key={member.firstName + member.lastName + member.jobPosition}
        firstName={member.firstName}
        lastName={member.lastName}
        jobPosition={member.jobPosition}
        gameRole={member.gameRole}
      />
    );
  });
  return (
    <section className="members-list">
      <h2 className="members-headline">Members:</h2>
      <div className="members-wrapper">{membersItems}</div>
    </section>
  );
};

export default MembersList;
