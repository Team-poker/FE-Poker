import { AnyAction } from "redux";
import { initialState } from "./initialState";
import { ADD_CURRENT_USER } from "./types";

export const currentUserReducer = (
  state = initialState.currentUser,
  action: AnyAction
) => {
  switch (action.type) {
    case ADD_CURRENT_USER:
      return { ...action.payload };
    default:
      return state;
  }
};
