import {ICreateResult} from "../ts/interfaces/app_interfaces";
import {CREATE_RESULT} from "./types";

const initialState =
    [
        {id: 'task id', title: "issue 155", score: "number"},
        {id: 'task id', title: "issue 111", score: "number"},
    ]

export const resultReducer = (state = initialState, action: ICreateResult ) => {
    switch (action.type) {
        case CREATE_RESULT:
            return state.push(action.payload);
        default:
            return state;
    }
}