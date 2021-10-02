import React from 'react';
import {ICard} from "../../../../ts/interfaces/app_interfaces";
import {connect} from "react-redux";
import CardItem from "./CardItem/CardItem";
import "./Card.scss";
import Button from "../Button/Button";
import {createCards} from "../../../../redux/actions";


export const Cards = ( { cards, createCards }: any) => {
    const cardsList = cards.map((card: ICard) => {
        return <CardItem
            title={card.title}
            image={card.image}
            id={card.id}
            key={card.title + card.image + card.id}
        />
    });
    const getCards = () => {
        const newCards =
            [
                {image: "./images/cup-png.png", id: "0", title:"Unknown" },
                {image: "./images/SP.svg", id: "1", title: "1"},
                {image: "./images/SP.svg", id: "2", title:"1"},
                {image: "./images/SP.svg", id: "3", title:"2"},
                {image: "./images/SP.svg", id: "4", title:"3"},
                {image: "./images/SP.svg", id: "5", title:"5"},
                {image: "./images/SP.svg", id: "6", title:"8"},
            ];
        createCards(newCards);
    }
    return (
        <>
            <section className="cards">
                <h3 className="cards-info">Add card values:</h3>
                <div className="cards-list">{cardsList}</div>
                <Button type="submit" text="Change cards" class="blue-btn btn-change" onAction={getCards} />
            </section>

        </>
    );
};
const mapDispatchToProps = {
    createCards
}
const mapStateToProps = (state: any) => {
    return {
        cards: state.cards,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cards);