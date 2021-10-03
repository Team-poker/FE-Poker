import { combineReducers } from "redux";
import { messagesReducer } from "./messagesReducer";
import { currentUserReducer } from "./currentUserReducer";
import { cardsReducer } from "./cardsReducer";
import { issuesReducer } from "./issuesReducer";
import { titleReducer } from "./titleReducer";
import { chatReducer } from "./chatReducer";
import { resultReducer } from "./resultREducer";
import { usersReducer } from "./usersReducer";

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  usersList: usersReducer,
  messages: messagesReducer,
  issues: issuesReducer,
  cards: cardsReducer,
  gameTitle: titleReducer,
  isChatOpen: chatReducer,
  result: resultReducer,
});

export default rootReducer;
