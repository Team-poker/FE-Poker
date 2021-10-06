import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addNewVote, editCardTitle } from "../../../../../redux/actions";
import {
  ICard,
  IUser,
  IVote,
} from "../../../../../ts/interfaces/app_interfaces";
import { socket } from "../../../../../App";

import "./CardItem.scss";
type PropsFromRedux = typeof mapDispatchToProps;

// interface Socket {
//     on(event: string, callback: (data: any) => void ): void;
//     emit(event: string, data: any): void;
// }

export interface ItemProps extends PropsFromRedux {
  title: string;
  count?: number;
  image: any;
  storyPoint?: string;
  id: string;
  isEditable: boolean;
  currentUserId?: string;
  activeIssue?: string;
}

const CardItem = (props: ItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [enteredValue, setEnteredValue] = useState("");
  const [isCardClicked, setIsCardClicked] = useState(false);
  const handleTitleEdit = () => {
    setIsEditing(true);
  };

  const handleTitleInput = (e: any) => {
    setIsEditing(true);
    const editTitle = e.target.value;
    setEnteredValue(editTitle);
  };

  const handleTitleConfirm = (e: any) => {
    e.preventDefault();
    const newCard: ICard = {
      id: props.id,
      title: enteredValue,
      image: props.image,
    };
    props.editCardTitle(newCard);
    setIsEditing(false);
  };

  const handleVote = (e: any) => {
    e.stopPropagation();
    setIsCardClicked(true);
    const newVote = {
      userId: props.currentUserId,
      issueTitle: props.activeIssue,
      userVote: props.title,
    };
    // props.addNewVote(newVote);
    socket.emit("userVote", newVote);
  };

  return (
    <>
      <div className={!isCardClicked ? "card-item" : "card-item active"} onClick={handleVote}>
        {!isEditing && (
          <>
            <div className="title-card">
              {props.title}
              {props.isEditable && (
                <div className="pen-card" onClick={handleTitleEdit} />
              )}
            </div>
            <div className="main-card">
              <img className="main-card__image" src={props.image} alt="" />
            </div>
            <div className="revert-card">{props.title}</div>
          </>
        )}
        {isEditing && (
          <form
            className="edit-title-form"
            onSubmit={handleTitleConfirm}
            // onReset={handleTitleReset}
          >
            <input
              type="text"
              value={enteredValue}
              autoFocus
              onChange={handleTitleInput}
            />

            <button type="submit" className="confirm-title"></button>
            <button type="reset" className="reset-title"></button>
          </form>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    currentUserId: state.currentUser.id,
    activeIssue: state.activeIssue,
  };
};

const mapDispatchToProps = {
  editCardTitle,
  addNewVote,
};
export default connect(mapStateToProps, mapDispatchToProps)(CardItem);
