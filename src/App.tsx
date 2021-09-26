import React from "react";
import "./App.css";
import io from "socket.io-client";
import Chat from "./components/Chat/chat";
import MainPage from "./pages/MainPage/MainPage";
import Lobby from "./pages/Lobby/Lobby";
import GamePage from "./pages/GamePage/GamePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

var socket = io.connect("https://pointing-poker123.herokuapp.com/");

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <MainPage socket={socket} />
      </Route>
      <Route path="/chat">
        <Chat socket={socket} />
      </Route>
      <Route path="/lobby" exact>
        <Lobby />
      </Route>
      <Route path="/game" exact>
        <GamePage />
      </Route>
    </Switch>
  </Router>
);

export default App;
