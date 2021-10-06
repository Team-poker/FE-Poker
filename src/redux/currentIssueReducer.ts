import { ISetActiveIssue } from "../ts/interfaces/app_interfaces";
import { SET_ACTIVE_ISSUE } from "./types";

const initialState: string = "";

export const currentIssueReducer = (
  state = initialState,
  action: ISetActiveIssue
) => {
  switch (action.type) {
    case SET_ACTIVE_ISSUE:
      return action.payload;
    default:
      return state;
  }
};
