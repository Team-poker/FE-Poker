import { combineReducers } from 'redux';
import { messagesReducer } from './messagesReducer';
import { usersReducer } from './usersReducer'

const rootReducer = combineReducers({
  messages: messagesReducer,
  currentUser: usersReducer
});

export default rootReducer;
