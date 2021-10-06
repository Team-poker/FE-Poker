import { AnyAction } from 'redux';
import {initialState} from './initialState'
import { TOGGLE_CHAT_VISIBILITY } from './types';

export const chatReducer = (state = initialState.isChatOpen, action: AnyAction) => {
  switch (action.type) {
    case TOGGLE_CHAT_VISIBILITY: 
      return action.payload;
    default: return state
  }
};