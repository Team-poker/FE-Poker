import React from "react";

import Header from "../Lobby/components/Header/Header";
import Footer from "../Lobby/components/Footer/Footer";
import GameInfo from "./components/Game-info/GameInfo";
import GameVote from "./components/Game-vote/GameVote";

import "./GamePage.scss";
import Button from "../Lobby/components/Button/Button";
import Card, {Cards} from "../Lobby/components/Card/Card";
import CardItem from "../Lobby/components/Card/CardItem/CardItem";
import {editCardTitle} from "../../redux/actions";
import {connect} from "react-redux";
// import GameTimer from "./components/Game-info/Game-state/Game-timer/Game-timer";


// TODO Пока вынесла константой, переделаю, чтобы определять дилера по id
export const isCurrentPlayerDealer = true;

const GamePage = (card:any ) => {
    const onDownload = () => {

    }
    return (
        <div className="game-page">
            <Header />
            <main className="game-main">
                <div className="game-wrapper">
                    <GameInfo />
                    {/*<GameTimer time={425} />*/}
                    <GameVote />
                </div>
                <Button type="submit" text="Download results" class="blue-btn btn-result" onAction={onDownload} />
                <div className="cards-game">
                    <Card  key={card.title + card.image + card.id} isEditable={false} />
                </div>
            </main>
            <Footer />
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        cards: state.cards,
    }
}
export default connect(mapStateToProps, null)(GamePage);
