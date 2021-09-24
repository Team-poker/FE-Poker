import { ICreateIssue } from "src/ts/interfaces/app_interfaces.ts";
import { CREATE_ISSUE } from "./types";

const initialState = [
  { title: "issue 155", priority: "high" },
  {
    title: "Issue 111",
    priority: "high",
  },
];

export const issuesReducer = (state = initialState, action: ICreateIssue) => {
  switch (action.type) {
    case CREATE_ISSUE:
      state.push(action.payload);
    default:
      return state;
  }
};
