import React from "react";
import Button from "../../../../Lobby/components/Button/Button";
import GameTimer from "../Game-state/Game-timer/Game-timer";

import "./Round-controls.scss";

const RoundControls = () => {
  //TODO Переделаю на useState
  const isNewRound = false;

  //TODO Добавить хэндлеры для кнопок
  return (
    <section className="round-controls">
      {isNewRound && (
        <div className="new-round-control">
          <GameTimer timer={425} />
          <Button className="blue-btn" text="Run Round" />
        </div>
      )}
      {!isNewRound && (
        <>
          <div className="reset-round-control">
            <GameTimer />
            <Button class="blue-btn" text="Restart Round" />
          </div>
          <Button class="blue-btn" text="Next Issue" />
        </>
      )}
    </section>
  );
};

export default RoundControls;
