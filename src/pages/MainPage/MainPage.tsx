import React, { useState } from 'react';
import Button from '../../components/Button/Button.tsx';
import Header from './blocks/Header/Header.tsx';
import Main from './blocks/Main/Main.tsx';
import Footer from './blocks/Footer/Footer.tsx';
import './MainPage.scss';
import Modal from '../../components/Modal/Modal';
import WhiteButton from '../../components/WhiteButton/WhiteButton.tsx';
import Switch from '../../components/Switch/Switch';

const MainPage = () => {
  const buttonsNames = [
    {
      name: 'Start new game',
    },
    {
      name: 'Connect',
    },
    {
      name: 'Button',
    },
    {
      name: 'Confirm',
    },
    {
      name: 'Cancel',
    },
  ];
  const [activeModal, setActiveModal] = useState(true);

  return (
    <>
      <Header />
      <Main />
      <div className="button-modal" onClick={() => setActiveModal(true)}>
        <Button className="button-link" name={buttonsNames[0].name} />
      </div>
      <Modal active={activeModal} setActive={setActiveModal}>
          <div className="modal__window">
            <h3 className="lobby__modal"> Connect to lobby</h3>
            <span className="span__modal">
              Connect as
              <br />
              Observer
              <span className="switch__modal"><Switch /></span>
            </span>
          </div>
        <form className="form__modal" action="">
          <label>
            <span className="input__text">Your first name:</span>
            <br />
            <input className="input__modal" type="text" />
          </label>
          <label>
            <span className="input__text">Your last name:</span>
            <br />
            <input className="input__modal" type="text" />
          </label>
          <label>
            <span className="input__text">Your job position:</span>
            <br />
            <input className="input__modal" type="text" />
          </label>
          <label>
            <span className="input__text">Image:</span>
            <br />
            <input className="input__photo" type="text" placeholder="Choose file" disabled />
            <span className="button__modal"><Button className="button__modal" name={buttonsNames[2].name} /></span>
          </label>
        </form>
        <div className="modal__buttons">
          <span className="cancel__modal"><Button className="cancel__modal" name={buttonsNames[3].name} /></span>
          <div onClick={() => setActiveModal(false)}>
            <WhiteButton name={buttonsNames[4].name} />
          </div>
        </div>
      </Modal>
      <Footer />
    </>
  );
};
export default MainPage;
