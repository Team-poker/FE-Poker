import {ICard, ICreateCards, IEditCards} from "src/ts/interfaces/app_interfaces.ts";
import {CREATE_CARDS, EDIT_CARD_TITLE} from "./types";

const initialState =
     [
        { id: "0", title: "Unknown", image: "./images/cup-png.png"},
        {id: "1", title: "12", image: "./images/SP.svg"},
        {id: "2", title:"1", image: "./images/SP.svg"},
        {id: "3", title: "13", image: "./images/SP.svg"},
];

const updateCard = (state: any, card: ICard) => {
    // const newCards = state.filter((item: ICard) => item.id !== card.id);
    // return [...newCards, card];
    const newCards = state.map((item: ICard) => {
        if (item.id !== card.id) {
            return item;
        } else if (item.id === card.id) {
            return {id: item.id, title: card.title, image: item.image};
        }
    });
    return newCards;
}
export const cardsReducer = (state = initialState, action: ICreateCards | IEditCards) => {
    switch (action.type) {
        case CREATE_CARDS:
            return state.push(action.payload);
        case EDIT_CARD_TITLE:
            return updateCard(state, action.payload);

        default:
            return state;
    }
};