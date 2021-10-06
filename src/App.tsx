import React from "react";
import "./App.css";
import {io} from "socket.io-client";
import MainPage from "./pages/MainPage/MainPage";
import GamePage from "./pages/GamePage/GamePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Lobby from "./pages/Lobby/Lobby";

export var socket = io("https://pointing-poker123.herokuapp.com/");
console.log("SOCKET ID", socket.id);

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <MainPage socket={socket} />
      </Route>
      <Route path="/lobby">
        <Lobby socket={socket} />
      </Route>
      <Route path="/game" exact>
        <GamePage socket={socket} />
      </Route>
    </Switch>
  </Router>
);

export default App;
