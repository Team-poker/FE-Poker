import { IMessage, IUser, IIssue } from "../ts/interfaces/app_interfaces";
import { ADD_CURRENT_USER, CREATE_MESSAGE, CREATE_ISSUE } from "./types";

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
