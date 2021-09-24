import React, { useState } from "react";

import { connect } from "react-redux";
import { editTitle } from "../../../../redux/actions";

import "./Lobby-title.scss";

const LobbyTitle = (props: any) => {
  const initialTitle = props.title;
  const [isEditing, setIsEditing] = useState(false);
  const [enteredValue, setEnteredValue] = useState(initialTitle);

  const handleTitleEdit = () => {
    setIsEditing(true);
  };

  const handleTitleInput = (e: any) => {
    const title = e.target.value;
    setEnteredValue(title);
  };

  const handleTitleConfirm = (e: any) => {
    e.preventDefault();
    props.editTitle(enteredValue);
    setIsEditing(false);
  };

  const handleTitleReset = (e: any) => {
    e.preventDefault();
    setIsEditing(false);
    setEnteredValue(props.title);
  };

  return (
    <div className="lobby-title-block">
      {!isEditing && (
        <>
          <h1 className="lobby-title">{props.title}</h1>
          <span className="edit-title" onClick={handleTitleEdit}>
            <img
              src={require("../../../../../public/pen.svg")}
              alt="Edit title"
            ></img>
          </span>
        </>
      )}
      {isEditing && (
        <form
          className="edit-title-form"
          onSubmit={handleTitleConfirm}
          onReset={handleTitleReset}
        >
          <input
            type="text"
            value={enteredValue}
            autoFocus
            onChange={handleTitleInput}
            className="title-input"
          ></input>
          <button type="submit" className="confirm-title">
            <img
              src={require("../../../../../public/check-icon.png")}
              alt="Confirm"
            />
          </button>
          <button type="reset" className="reset-title">
            <img
              src={require("../../../../../public/bin-icon.svg")}
              alt="Cancel"
            />
          </button>
        </form>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    title: state.gameTitle,
  };
};

const mapDispatchToProps = {
  editTitle,
};

export default connect(mapStateToProps, mapDispatchToProps)(LobbyTitle);
function title(title: any): [any, any] {
  throw new Error("Function not implemented.");
}
