import { combineReducers } from "redux";
import { messagesReducer } from "./messagesReducer";
import { usersReducer } from "./usersReducer";
import { issuesReducer } from "./issuesReducer";

const rootReducer = combineReducers({
  messages: messagesReducer,
  currentUser: usersReducer,
  issues: issuesReducer,
  cards: cardsReducer,
});

export default rootReducer;
