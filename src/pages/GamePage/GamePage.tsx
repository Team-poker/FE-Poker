import React from "react";
import { connect } from "react-redux";

import Header from "../Lobby/components/Header/Header";
import Footer from "../Lobby/components/Footer/Footer";
import GameInfo from "./components/Game-info/GameInfo";
import GameVote from "./components/Game-vote/GameVote";
import Button from "../Lobby/components/Button/Button";
import Card from "../Lobby/components/Card/Card";

import "./GamePage.scss";

const GamePage = (card: any, socket: any) => {
  const onDownload = () => {};
  return (
    <div className="game-page">
      <Header />
      <main className="game-main">
        <div className="game-wrapper">
          <GameInfo socket={socket} />
          <GameVote socket={socket} />
        </div>
        <Button
          type="submit"
          text="Download results"
          class="blue-btn btn-result"
          onAction={onDownload}
        />
        <div className="cards-game">
          <Card key={card.title + card.image + card.id} isEditable={false} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    cards: state.cards,
  };
};
export default connect(mapStateToProps, null)(GamePage);
