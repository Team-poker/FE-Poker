 import { CREATE_MESSAGE } from './types';
import { AnyAction } from 'redux';
import {initialState} from './initialState'

export const messagesReducer = (state = initialState.messages, action: AnyAction) => {
  switch (action.type) {
    case CREATE_MESSAGE:
      return state.concat([action.payload]);
    default: return state
  }
};
