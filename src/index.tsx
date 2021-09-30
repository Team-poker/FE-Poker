import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import App from './App.tsx';
import rootReducer from './redux/rootReducer';

const saveToLocalStorage = (state: any) => {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("persistantState", serialisedState);
    }
    catch(e) {
        console.warn(e);
    }
}
const loadFromLocalStorage = () => {
    try {
        const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
    }
    catch(e) {
        console.warn(e);
        return undefined;
    }
}
const store = createStore(rootReducer, loadFromLocalStorage(), composeWithDevTools(applyMiddleware(thunk)));
store.subscribe(() => saveToLocalStorage(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
