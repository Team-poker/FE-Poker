import React from "react";
import { connect } from "react-redux";

import ScrumMasterBlock from "../../../../Lobby/components/Scrum-master/Scrum-master";
import GameTimer from "./Game-timer/Game-timer";
import Button from "../../../../Lobby/components/Button/Button";
import { isCurrentDealer } from "../../../../../utils";

import "./Game-state.scss";

const GameState = (props: any) => {
  const isCurrentPlayerDealer = isCurrentDealer(props.currentUser);
  return (
    <section className="game-state">
      <ScrumMasterBlock />
      {!isCurrentPlayerDealer && <GameTimer />}
      {!isCurrentPlayerDealer && <Button text="Exit" class="white-btn" />}
      {isCurrentPlayerDealer && <Button text="Stop Game" class="white-btn" />}
    </section>
  );
};

const mapStateToProps = (state: any) => {
  return {
    currentUser: state.currentUser,
  };
};
export default connect(mapStateToProps, null)(GameState);
