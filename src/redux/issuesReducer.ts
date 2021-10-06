import { ICreateIssue, IIssue, ISetIssues } from "src/ts/interfaces/app_interfaces.ts";
import { CREATE_ISSUE, SET_ISSUESLIST } from "./types";

const initialState: Array<IIssue> | [] = [];

export const issuesReducer = (
  state = initialState,
  action: ICreateIssue | ISetIssues
) => {
  switch (action.type) {
    case CREATE_ISSUE:
      return [...state, action.payload];
    case SET_ISSUESLIST:
      return action.payload;
    default:
      return state;
  }
};
