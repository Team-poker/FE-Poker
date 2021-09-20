import React from 'react';
import {ICard} from "../../../../ts/interfaces/app_interfaces";
import CardItem from "./CardItem/CardItem";

const Cards = ({ cards }: any) => {
    const cardsList = cards.map((card: ICard) => (
        <CardItem
            title={card.title}
            count={card.count}
            storyPoint={card.storyPoint}
            key={card.title + card.count + card.storyPoint}
        />
    ));
    return (
        <section className="cards">
            <h3 className="cards-info">Add card values:</h3>
        </section>
    );
};

export default Cards;