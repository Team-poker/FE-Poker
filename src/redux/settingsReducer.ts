import {ICreatePlayer, ICreateTimerSettings} from "../ts/interfaces/app_interfaces";
import {CREATE_PLAYER, CREATE_TIMER_SETTINGS} from "./types";

const initialstate = false;


export const settingsReducer = (state = initialstate, action: ICreatePlayer | ICreateTimerSettings ) => {
    switch(action.type) {
        case CREATE_PLAYER:
            return action.payload;
        case CREATE_TIMER_SETTINGS:
            return action.payload;
        default:
            return state;
    }
}