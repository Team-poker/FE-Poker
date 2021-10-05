import React, {useEffect, useState} from "react";
import "./Game-timer.scss";

interface State {
  time: number;
  minutes: number;
  seconds: number;
}

const GameTimer = ({time}: any) => {
  debugger;
  const [state, setState] = useState<State> ({
    time,
    minutes: Math.floor((time - 1) / 60),
    seconds: time - Math.floor((time - 1) / 60) * 60 - 1,
  });
  useEffect(() => {
    setTimeout(() => {
      if(state.time === 0) return;
      setState({
        time: state.time - 1,
        minutes: Math.floor((state.time - 1) / 60),
        seconds: state.time - Math.floor((state.time - 1) / 60) * 60 - 1,
      });
    }, 1000)
  }, [state.time]);
  return (
      <div>
        <h2>{`${state.minutes}:${state.seconds < 10 ? `0${state.seconds}` : state.seconds}`}</h2>
      </div>
  );
};

export default GameTimer;