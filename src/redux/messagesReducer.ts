import { CREATE_MESSAGE } from './types';
import { AnyAction } from 'redux';
import { IMessagesList } from '../ts/interfaces/app_interfaces'

const initialState: IMessagesList = {
  messages: [
    {
      id: 0,
      text: 'Привет!',
      member: {
        firstName: 'Bekzhan',
        lastName: 'Zhamantayev',
        position: 'junior frontend developer',
      }
    },
    {
      id: 1,
      text: 'Как дела?',
      member: {
        firstName: 'Bekzhan',
        lastName: 'Zhamantayev',
        position: 'junior frontend developer'
      }
    }
  ],
};

export const messagesReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case CREATE_MESSAGE: 
      return { ...state, messages: state.messages.concat([action.payload]) };
    default: return state
  }
};
