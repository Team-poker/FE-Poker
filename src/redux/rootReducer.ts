import { combineReducers } from 'redux';
import { messagesReducer } from './messagesReducer';
import { usersReducer } from './usersReducer'
import {cardsReducer} from "../redux/cardsReducer";

const rootReducer = combineReducers({
  messages: messagesReducer,
  currentUser: usersReducer,
  cards: cardsReducer
});

export default rootReducer;
