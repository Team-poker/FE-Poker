import { IMessage } from "../ts/interfaces/app_interfaces"
import { CREATE_MESSAGE } from "./types"

export const createMessage = (message: IMessage) => {
  return {
    type: CREATE_MESSAGE,
    payload: message
  }
}