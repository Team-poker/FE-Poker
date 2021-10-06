import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LobbyTitle from "./components/Lobby-title/Lobby-title";
import ScrumMasterBlock from "./components/Scrum-master/Scrum-master";
import MembersList from "./components/Members-list/Members-list";
import IssuesList from "./components/Issues-list/Issues-list";
// import GameLink from "./components/Game-link/Game-link";
import GameControls from "./components/Game-controls/Game-controls";
import GameSettings from "./components/Game-settings/Game-settings";
import Chat from "../../components/Chat/Chat";
import {
  addCurrentUser,
  setInitialUsersList,
  updateCardsList,
  updateIssuesList,
} from "../../redux/actions";
import { isCurrentDealer, isDealerPresent } from "../../utils";
import { socket } from "../../App";

import "./Lobby.scss";

const Lobby = ({
  isChatOpen,
  updateCardsList,
  updateIssuesList,
  setInitialUsersList,
  addCurrentUser,
  usersList,
  currentUser,
}: any) => {
  const history = useHistory();

  socket.on("playerLeft", (newUsers: any) => {
    setInitialUsersList(newUsers);
    const user = newUsers.filter((item: any) => item.id === socket.id);
    const updatedUser = {
      id: user[0].id,
      firstName: user[0].firstName,
      lastName: user[0].lastName,
      jobPosition: user[0].jobPosition,
      roomName: "testroom",
      dealer: user[0].dealer,
    };
    addCurrentUser(updatedUser);
  });

  socket.on("gameCanceled", () => {
    history.push("/");
  });

  socket.on("startGame", ({ cards, issues }: any) => {
    updateCardsList(cards);
    updateIssuesList(issues);
    history.push("/game");
  });

  return (
    <div className="lobby">
      <Header />
      <main className="lobby-main">
        <div className={!isChatOpen ? "wrapper" : "wrapper chat-open"}>
          <LobbyTitle />
          {usersList && isDealerPresent(usersList) && <ScrumMasterBlock />}
          {/*<GameLink />*/}
          <GameControls socket={socket} />
          {isCurrentDealer(currentUser) && <IssuesList />}
          <MembersList socket={socket} />
          {isCurrentDealer(currentUser) && <GameSettings />}
        </div>
        <Chat socket={socket} />
      </main>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isChatOpen: state.isChatOpen,
    usersList: state.usersList,
    currentUser: state.currentUser,
  };
};

const mapDispatchToProps = {
  updateCardsList,
  updateIssuesList,
  setInitialUsersList,
  addCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Lobby);
