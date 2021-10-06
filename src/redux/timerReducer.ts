
import {ICreateTimer} from "../ts/interfaces/app_interfaces";
import {CREATE_TIMER} from "./types";

const initialState = {
    time: 60,
    minutes: 1,
    seconds: 0
}
export const timerReducer = (state = initialState, action: ICreateTimer) => {
    switch(action.type) {
        case CREATE_TIMER:
            return action.payload;
            // return {...state, time: state.time + action.payload};
        default:
            return state;
    }
}