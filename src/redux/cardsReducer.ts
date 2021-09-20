import {ICreateCards } from "src/ts/interfaces/app_interfaces.ts";
import { CREATE_CARDS } from "./types";

const initialState = {
    cards: [{ title: "Unknown", storyPoint: "true", count: 0 },
        {title: "SP", storyPoint: "true", count: 12},
        {title:"SP", storyPoint: "true", count: 1},
        {title: "SP", storyPoint: "true", count: 13},
]
};

export const cardsReducer = (state = initialState, action: ICreateCards) => {
    switch (action.type) {
        case CREATE_CARDS:
            return { ...action.payload };
        default:
            return state;
    }
};