import React from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LobbyTitle from "./components/Lobby-title/Lobby-title";
import ScrumMasterBlock from "./components/Scrum-master/Scrum-master";
import MembersList from "./components/Members-list/Members-list";
import IssuesList from "./components/Issues-list/Issues-list";
import GameLink from "./components/Game-link/Game-link";
import GameControls from "./components/Game-controls/Game-controls";

import "./Lobby.css";
import GameSettings from "./components/Game-settings/Game-settings";

const Lobby = () => {
  return (
    <div className="lobby">
      <Header />
      <main className="lobby-main">
        <div className="wrapper">
          <LobbyTitle />
          <ScrumMasterBlock />
          {/*<GameLink />*/}
          <GameControls />
          <MembersList />
          <IssuesList />
          <GameSettings />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Lobby;
