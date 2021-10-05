import './Main.scss';
import React, { useState } from 'react';
import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';


const Main = () => {
  const text = 'Poker';
  const poker = 'Planning';
  const parag = 'Start your planning:';
  const buttonText = 'Create session:';
  return (
    <div className="main-wrapper">
      <div className="main">
        <div className="main-part">
          <div><img className="main-photo" src={require('../../../../../assets/Frame.svg')} alt="cannot display" /></div>
          <div className="main-text">
            <img className="line-photo" src={require('../../../../../assets/Line.svg')} alt="it's a line" />
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
        <div className="span-text">
        </div>
      </div>
    </div>
  );
};

export default Main;
