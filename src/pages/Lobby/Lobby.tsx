import React from "react";
import { connect } from "react-redux";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LobbyTitle from "./components/Lobby-title/Lobby-title";
import ScrumMasterBlock from "./components/Scrum-master/Scrum-master";
import MembersList from "./components/Members-list/Members-list";
import IssuesList from "./components/Issues-list/Issues-list";
import GameLink from "./components/Game-link/Game-link";
import GameControls from "./components/Game-controls/Game-controls";
import GameSettings from "./components/Game-settings/Game-settings";
import Chat from "../../components/Chat/Chat";
import "./Lobby.scss";

const Lobby = ({ isChatOpen, socket, addUserToUserslist }: any) => {
  return (
    <div className="lobby">
      <Header />
      <main className="lobby-main">
        <div className={!isChatOpen ? "wrapper" : "wrapper chat-open"}>
          <LobbyTitle />
          <ScrumMasterBlock />
          {/*<GameLink />*/}
          <GameControls />
          <MembersList socket={socket} />
          <IssuesList />
          <GameSettings />
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
  };
};

export default connect(mapStateToProps, null)(Lobby);
