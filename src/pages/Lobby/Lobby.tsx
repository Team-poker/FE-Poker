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
import { updateCardsList, updateIssuesList } from "../../redux/actions";
import { isCurrentDealer, isDealerPresent } from "../../utils";

import "./Lobby.scss";

const Lobby = ({
  isChatOpen,
  socket,
  updateCardsList,
  updateIssuesList,
  usersList,
  currentUser,
}: any) => {
  const history = useHistory();
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
          {isDealerPresent(usersList) && <ScrumMasterBlock />}
          {/*<GameLink />*/}
          <GameControls socket={socket} />
          <MembersList socket={socket} />
          {isCurrentDealer(currentUser) && <IssuesList />}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Lobby);
