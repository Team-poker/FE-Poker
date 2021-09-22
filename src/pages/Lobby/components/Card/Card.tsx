import React from 'react';
import {ICard} from "../../../../ts/interfaces/app_interfaces";
import {connect} from "react-redux";
import CardItem from "./CardItem/CardItem";
import {createCards} from "../../../../redux/actions";
import "./Card.scss";


export const Cards = ({ cards }: any) => {
    const cardsList = cards.map((card: ICard, i: ICard) => (
        <CardItem
            title={card.title}
            count={card.count}
            storyPoint={card.storyPoint}
            image={card.image}
            key={card.title + card.count + card.storyPoint + card.image}
        />
    ));
    return (
        <section className="cards">
            <h3 className="cards-info">Add card values:</h3>
            <div className="cards-list">{cardsList}</div>
        </section>
    );
};
const mapStateToProps = (state: any) => {
    return {
        cards: state.cards.cards,
    }
}

const mapDispatchToProps = {
    createCards
}
export default connect(mapStateToProps, mapDispatchToProps)(Cards);