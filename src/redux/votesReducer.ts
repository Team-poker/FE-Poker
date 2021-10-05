import { IAddVote, IVote } from "../ts/interfaces/app_interfaces";
import { ADD_VOTE } from "./types";

const initialState: Array<IVote> | [] = [];

export const votesReducer = (state = initialState, action: IAddVote) => {
  switch (action.type) {
    case ADD_VOTE:
      return action.payload;
    default:
      return state;
  }
};
