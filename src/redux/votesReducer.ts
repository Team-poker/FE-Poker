import { IAddVote, IVote } from "../ts/interfaces/app_interfaces";
import { ADD_VOTE } from "./types";

const initialState: Array<IVote> | [] = [];

const handleAddVote = (state: Array<IVote>, vote: IVote) => {
  if (state.length === 0) state.push(vote);
  else {
    const filteredVotes = state.filter(
      (item) =>
        item.issueTitle !== vote.issueTitle && item.userId !== vote.userId
    );
    return [...filteredVotes, vote];
  }
};

export const usersReducer = (state = initialState, action: IAddVote) => {
  switch (action.type) {
    case ADD_VOTE:
      return handleAddVote(state, action.payload);
    default:
      return state;
  }
};
