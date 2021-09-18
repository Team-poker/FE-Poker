import { IMessage, IUser } from "../ts/interfaces/app_interfaces"
import { ADD_CURRENT_USER, CREATE_MESSAGE } from "./types"

export const createMessage = (message: IMessage) => {
  return {
    type: CREATE_MESSAGE,
    payload: message
  }
}

export const addCurrentUser = (user: IUser) => {
  return {
    type: ADD_CURRENT_USER,
    payload: user
  }
}