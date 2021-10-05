import React, { useEffect } from "react";
import { connect } from "react-redux";

import MemberBage from "../Member-bage/Member-bage";
import { addUserToUserslist } from "../../../../redux/actions";
import { IUser } from "../../../../ts/interfaces/app_interfaces";
import { isCurrentUser } from "../../../../utils";

import "./Members-list.scss";

const MembersList = ({
  socket,
  addUserToUserslist,
  usersList,
  currentUser,
}: any) => {
  useEffect(() => {
    socket.on("newUser", (newUser: IUser) => {
      addUserToUserslist(newUser);
    });
  }, [socket]);

  const members = usersList?.filter((player: any) => !player.dealer);
  const membersItems = members?.map((member: any) => {
    return (
      <MemberBage
        key={member.id}
        firstName={member.firstName}
        lastName={member.lastName}
        jobPosition={member.jobPosition}
        dealer={member.dealer}
        current={isCurrentUser(member.id, currentUser.id)}
      />
    );
  });
  return (
    <section className="members-list">
      <h2 className="members-headline">Members:</h2>
      {!members || members.length === 0 && <p>Waiting for the players...</p>}
      <div className="members-wrapper">{membersItems}</div>
    </section>
  );
};

const mapStateToProps = (state: any) => {
  return {
    currentUser: state.currentUser,
    usersList: state.usersList,
  };
};

const mapDispatchToProps = {
  addUserToUserslist,
};

export default connect(mapStateToProps, mapDispatchToProps)(MembersList);
