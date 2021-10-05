import React from "react";

import ScrumMasterBlock from "../../../../Lobby/components/Scrum-master/Scrum-master";
// import GameTimer from "./Game-timer/Game-timer";
import Button from "../../../../Lobby/components/Button/Button";
import { isCurrentPlayerDealer } from "../../../GamePage";

import "./Game-state.scss";

const GameState = () => {
  return (
    <section className="game-state">
      <ScrumMasterBlock />
      {/*{!isCurrentPlayerDealer && <GameTimer />}*/}
      {!isCurrentPlayerDealer && <Button text="Exit" class="white-btn" />}
      {isCurrentPlayerDealer && <Button text="Stop Game" class="white-btn" />}
    </section>
  );
};

export default GameState;
