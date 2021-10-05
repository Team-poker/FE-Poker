import { IAddVote, IVote } from "../ts/interfaces/app_interfaces";
import { ADD_VOTE } from "./types";

const initialState: Array<IVote> | [] = [];

const handleAddVote = (state: Array<IVote>, vote: IVote) => {
  if (state.length === 0) {
    const newState = [...state];
    newState.push(vote);
    return newState;
  } else {
    console.log("STATE", state);
    const filteredVotes = state.filter((item) => {
      return item.issueTitle !== vote.issueTitle && item.userId !== vote.userId;
    });
    console.log("FILTERED_VOTES", filteredVotes);
    const newState = [...filteredVotes];
    newState.push(vote);
    return newState;
  }
};

export const votesReducer = (state = initialState, action: IAddVote) => {
  switch (action.type) {
    case ADD_VOTE:
      //   return handleAddVote(state, action.payload);
      return action.payload;
    default:
      return state;
  }
};
