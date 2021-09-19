import React from 'react';
import './App.css';
import io from 'socket.io-client';
import { Chat } from './components/Chat/Chat';
import MainPage from './pages/MainPage/MainPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


var socket = io.connect('http://localhost:3000/');

const App = () => (
  <Router>
    <Switch>
      <Route path='/' exact>
        <MainPage socket={socket} />
      </Route>
      <Route path='/lobby'>
        {/*<Chat socket={socket} />*/}
      </Route>
    </Switch>
  </Router>
);

export default App;