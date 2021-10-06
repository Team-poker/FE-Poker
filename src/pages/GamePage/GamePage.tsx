import React, {useEffect} from "react";
import { connect } from "react-redux";

import Header from "../Lobby/components/Header/Header";
import Footer from "../Lobby/components/Footer/Footer";
import GameInfo from "./components/Game-info/GameInfo";
import GameVote from "./components/Game-vote/GameVote";
import Button from "../Lobby/components/Button/Button";
// import GameTimer from "./components/Game-info/Game-state/Game-timer/Game-timer";
import { IVote } from "../../ts/interfaces/app_interfaces";
import { addCurrentUser, addNewVote, setInitialUsersList } from "../../redux/actions";
import { socket } from "../../App";

import "./GamePage.scss";
import Chat from "../../components/Chat/Chat";

const GamePage = (props: any) => {
  useEffect(() => {
    socket.on("newVotes", (voteData: Array<IVote>) => {
      props.addNewVote(voteData);
    });
  }, [socket]);

  socket.on("playerLeft", (newUsers: any) => {
    props.setInitialUsersList(newUsers);
    const user = newUsers.filter((item: any) => item.id === socket.id);
    const updatedUser = {
      id: user[0].id,
      firstName: user[0].firstName,
      lastName: user[0].lastName,
      jobPosition: user[0].jobPosition,
      roomName: "testroom",
      dealer: user[0].dealer,
    };
    props.addCurrentUser(updatedUser);
  });
  

// TODO Пока вынесла константой, переделаю, чтобы определять дилера по id
// const isCurrentPlayerDealer = true;

    // const onDownload = () => {

    // }
    return (
        <div className="game-page">
            <Header />
            <main className="game-main">
              <div className="game-wrapper">
                  {/*<GameTimer time={425} />*/}
                  <GameInfo />
              </div>
              {/* <Button
              type="submit"
              text="Download results"
              class="blue-btn btn-result"
              onAction={onDownload}
              /> */}
              <GameVote />
              <Chat socket={socket} />
        
            </main>
            <Footer />
        </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    cards: state.cards,
  };
};

const mapDispatchToProps = {
  addNewVote,
  setInitialUsersList,
  addCurrentUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
