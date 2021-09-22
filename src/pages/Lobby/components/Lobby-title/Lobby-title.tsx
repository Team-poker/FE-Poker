import React, { useState } from "react";

import "./Lobby-title.scss";

const LobbyTitle = () => {
  const [lobbyTitle, setLobbyTitle] = useState("Add planning title");
  const [isEditing, setIsEditing] = useState(false);
  const [enteredValue, setEnteredValue] = useState(lobbyTitle);

  const handleTitleEdit = () => {
    setIsEditing(true);
  };

  const handleTitleInput = (e: any) => {
    const title = e.target.value;
    setEnteredValue(title);
  };

  const handleTitleConfirm = (e: any) => {
    e.preventDefault();
    setLobbyTitle(enteredValue);
    setIsEditing(false);
  };

  const handleTitleReset = (e: any) => {
    e.preventDefault();
    setIsEditing(false);
    setEnteredValue(lobbyTitle);
  };

  return (
    <div className="lobby-title-block">
      {!isEditing && (
        <>
          <h1 className="lobby-title">{lobbyTitle}</h1>
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

export default LobbyTitle;
