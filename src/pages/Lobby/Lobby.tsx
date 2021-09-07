import React from "react";

import Header from "./components/Header/Header";
import ScrumMasterBlock from "./components/Scrum-master/Scrum-master";

import "./Lobby.css";

const Lobby = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <ScrumMasterBlock />
      </div>
    </>
  );
};

export default Lobby;
