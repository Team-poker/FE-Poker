import { IAddUser, ISetUsers, IUser } from "../ts/interfaces/app_interfaces";
import { SET_USERSLIST, UPDATE_USERSLIST } from "./types";

const initialState: Array<IUser> | [] = [];

export const usersReducer = (
  state = initialState,
  action: IAddUser | ISetUsers
) => {
  switch (action.type) {
    case SET_USERSLIST:
      return action.payload;
    case UPDATE_USERSLIST:
      return [...state, action.payload];
    default:
      return state;
  }
};
