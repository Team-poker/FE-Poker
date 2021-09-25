import React from "react";

import Header from "../Lobby/components/Header/Header";
import Footer from "../Lobby/components/Footer/Footer";
import GameInfo from "./components/Game-info/GameInfo";
import GameVote from "./components/Game-vote/GameVote";

import "./GamePage.scss";

// TODO Пока вынесла константой, переделаю, чтобы определять дилера по id
export const isCurrentPlayerDealer = true;

const GamePage = () => {
  return (
    <div className="game-page">
      <Header />
      <main className="game-main">
        <div className="game-wrapper">
          <GameInfo />
          <GameVote />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GamePage;
