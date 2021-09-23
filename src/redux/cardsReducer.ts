import {ICreateCards } from "src/ts/interfaces/app_interfaces.ts";
import { CREATE_CARDS } from "./types";

const initialState = {
    cards: [{ id: "0", title: "Unknown", image: "./images/cup-png.png"},
        {id: "1", title: "12", image: "./images/SP.svg"},
        {id: "2", title:"1", image: "./images/SP.svg"},
        {id: "3", title: "13", image: "./images/SP.svg"},
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