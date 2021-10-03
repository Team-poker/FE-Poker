import {
  ICard,
  IMessage,
  IUser,
  IIssue,
  IEditCard,
  IResult,
} from "../ts/interfaces/app_interfaces";

import {
  ADD_CURRENT_USER,
  CREATE_CARDS,
  CREATE_MESSAGE,
  CREATE_ISSUE,
  EDIT_TITLE,
  EDIT_CARD_TITLE,
  TOGGLE_CHAT_VISIBILITY,
  CREATE_RESULT,
  UPDATE_USERSLIST,
  SET_USERSLIST,
} from "./types";

export const createMessage = (message: IMessage) => {
  return {
    type: CREATE_MESSAGE,
    payload: message,
  };
};

export const addCurrentUser = (user: IUser) => {
  return {
    type: ADD_CURRENT_USER,
    payload: user,
  };
};

export const createIssue = (issue: IIssue) => {
  return {
    type: CREATE_ISSUE,
    payload: issue,
  };
};

export const createCards = (cards: ICard[]) => {
  return {
    type: CREATE_CARDS,
    payload: cards,
  };
};

export const editTitle = (title: string) => {
  return {
    type: EDIT_TITLE,
    payload: title,
  };
};

export const editCardTitle = (newCard: ICard) => {
  return {
    type: EDIT_CARD_TITLE,
    payload: newCard,
  };
};

export const toggleChatVisibility = (isChatOpen: boolean) => {
  return {
    type: TOGGLE_CHAT_VISIBILITY,
    payload: isChatOpen,
  };
};

export const getResult = (result: IResult) => {
  return {
    type: CREATE_RESULT,
    payload: result,
  };
};

export const setInitialUsersList = (usersList: Array<IUser>) => {
  return {
    type: SET_USERSLIST,
    payload: usersList,
  };
};

export const addUserToUserslist = (user: IUser) => {
  return {
    type: UPDATE_USERSLIST,
    payload: user,
  };
};
