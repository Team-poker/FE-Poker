import './Header.scss';
import React from 'react';

const Header = () => (
  <div className="header-wrapper">
    <div><img className="header-logo" src={require('../../../../../assets/logo.svg')} alt="" /></div>
    <div className="header-background" />
    <div className="header-color" />
  </div>
);

export default Header;
