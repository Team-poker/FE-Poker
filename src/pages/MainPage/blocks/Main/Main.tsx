import './Main.scss';
import React, { useState } from 'react';
import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import Modal from '../../../../components/Modal/Modal';

const Main = () => {
  const text = 'Poker';
  const poker = 'Planning';
  const parag = 'Start your planning:';
  const buttonText = 'Create session:';
  const buttonsNames = [
    {
      name: 'Start new game',
    },
    {
      name: 'Connect',
    },
  ];
  return (
    <div className="main-wrapper">
      <div className="main">
        <div className="main-part">
          <div><img className="main-photo" src={require('../../../../../public/Frame.svg')} alt="cannot display" /></div>
          <div className="main-text">
            <img className="line-photo" src={require('../../../../../public/Line.svg')} alt="it's a line" />
            {text}
            <div className="poker">{poker}</div>
          </div>
        </div>
      </div>
      <div className="main-planning">{parag}</div>
      <div className="main-content">
        <div className="main-button">
          <span className="span-text">
            {buttonText}
          </span>
        </div>
        <div className="text">OR:</div>
        <div className="link-button">
          <div className="link-text">
            Connect to lobby by
            <a className="main-link" href="#"> URL:</a>
          </div>
        </div>
        <div className="span-text">
          <Input />
          <span className="button-link"><Button className="button-link" name={buttonsNames[1].name} /></span>
        </div>
      </div>
    </div>
  );
};

export default Main;
