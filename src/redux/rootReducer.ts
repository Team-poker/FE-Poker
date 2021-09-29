import { combineReducers } from "redux";
import { messagesReducer } from "./messagesReducer";
import { usersReducer } from "./usersReducer";
import { cardsReducer } from "./cardsReducer";
import { issuesReducer } from "./issuesReducer";
import { titleReducer } from "./titleReducer";
import { chatReducer } from './chatReducer';
import {resultReducer} from "./resultREducer";

const rootReducer = combineReducers({
  messages: messagesReducer,
  currentUser: usersReducer,
  issues: issuesReducer,
  cards: cardsReducer,
  gameTitle: titleReducer,
  isChatOpen: chatReducer,
  result: resultReducer
});

export default rootReducer;
