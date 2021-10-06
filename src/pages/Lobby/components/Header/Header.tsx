import React from "react";
import { connect } from "react-redux";
import { toggleChatVisibility } from "../../../../redux/actions";

import "./Header.css";


const Header = ({isChatOpen, toggleChatVisibility}: any) => {
  const chatClickHandler = (event: any) => {
    toggleChatVisibility(!isChatOpen)
  }

  return (
    <header className="main-header">
      <div className="header-dark">
        <div className='chat-btn' onClick={chatClickHandler}></div>
      </div>
      <div className="header-light"></div>
      <div className="header-logo">
        <img
          src={require("../../../../../public/logo.png")}
          alt="Planning poker"
        />
      </div>
    </header>
  );
};

const mapDispatchToProps = {
  toggleChatVisibility
}

const mapStateToProps = (state: any) => {
  return {
    isChatOpen: state.isChatOpen
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
