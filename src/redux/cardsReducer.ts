import {ICreateCards } from "src/ts/interfaces/app_interfaces.ts";
import { CREATE_CARDS } from "./types";

const initialState = {
    cards: [{ title: "Unknown", image: ""},
        {title: "12"},
        {title:"1"},
        {title: "13"},
]
};

export const cardsReducer = (state = initialState, action: ICreateCards) => {
    switch (action.type) {
        case CREATE_CARDS:
            return state.cards.push(action.payload);
        default:
            return state;
    }
};