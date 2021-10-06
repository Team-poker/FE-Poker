import { IEditTitle } from "src/ts/interfaces/app_interfaces.ts";
import { EDIT_TITLE } from "./types";

const initialState = "Add planning title";

export const titleReducer = (state = initialState, action: IEditTitle) => {
  switch (action.type) {
    case EDIT_TITLE:
      return action.payload;
    default:
      return state;
  }
};
