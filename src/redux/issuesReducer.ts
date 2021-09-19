import { CREATE_ISSUE } from "./types";
import { initialState } from "./initialState";
import { ICreateIssue } from "../ts/interfaces/app_interfaces";

export const issuesReducer = (
  state = initialState.issues,
  action: ICreateIssue
) => {
  switch (action.type) {
    case CREATE_ISSUE:
      return state.push(action.payload);
    default:
      return state;
  }
};
