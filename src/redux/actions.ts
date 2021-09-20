import { ICard, IMessage, IUser } from "../ts/interfaces/app_interfaces";
import { ADD_CURRENT_USER, CREATE_CARDS, CREATE_MESSAGE } from "./types";

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

export const createCards = (cards: ICard) => {
  return {
    type: CREATE_CARDS,
    payload: cards,
  };
};
