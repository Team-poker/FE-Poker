import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-dark"></div>
      <div className="header-light"></div>
      <div className="header-logo">
        <img src="./logo.png" alt="Planning poker" />
      </div>
      <div className="chat-menu-btn"></div>
    </header>
  );
};

export default Header;
