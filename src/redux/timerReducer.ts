import {number} from "prop-types";
import {ICreateTimer} from "../ts/interfaces/app_interfaces";
import {CREATE_TIMER} from "./types";

const initialState = {
    time: number,
    minutes: number,
    seconds: number
}
export const timerReducer = (state = initialState, action: ICreateTimer) => {
    switch(action.type) {
        case CREATE_TIMER:
            return action.payload;
        default:
            return state;
    }
}