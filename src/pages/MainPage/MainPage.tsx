import React, {useEffect, useState} from 'react';
import Button from '../../components/Button/Button';
import Header from './blocks/Header/Header';
import Main from './blocks/Main/Main';
import Footer from './blocks/Footer/Footer';
import './MainPage.scss';
import Modal from '../../components/Modal/Modal';
import WhiteButton from '../../components/WhiteButton/WhiteButton';
import Switch from '../../components/Switch/Switch';

const MainPage = () => {
  const [name, setName] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [nameError, setNameError] = useState('Enter your name!');
  const [formValid, setFormValid] = useState(false);
  const blurHandler = (e: any) => {
    switch (e.target.name) {
      case 'name':
        setNameDirty(true);
        break;
      default:
    }
  };
  const nameHandler = (e: any) => {
    setName(e.target.value);
    const re = new RegExp('^[a-zA-Z]{4,}(?: [a-zA-Z]+)?(?: [a-zA-Z]+)?$');
    if (!re.test(String(e.target.value).toLowerCase())) {
      setNameError('Enter your name correctly!');
    } else {
      setNameError('');
    }
  };
  useEffect(() => {
    if (nameError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError]);
  const buttonsNames = [
    {
      name: 'Start new game',
    },
    {
      name: 'Connect',
    },
    {
      name: 'Load file',
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
            {(nameDirty && nameError) && <div style={{ color: 'red' }}>{nameError}</div>}
            <input value={name} onChange={(e) => nameHandler(e)} onBlur={(e) => blurHandler(e)} className="input__modal" type="text" name="name" />
          </label>
          <label>
            <span className="input__text">Your last name(optional):</span>
            <br />
            <input className="input__modal" type="text" />
          </label>
          <label>
            <span className="input__text">Your job position(optional):</span>
            <br />
            <input className="input__modal" type="text" />
          </label>
          <label>
            <span className="input__text">Image:</span>
            <br />
            <input className="input__photo" type="file" placeholder="Choose file" disabled />
            <span className="button__modal"><Button className="button__modal" name={buttonsNames[2].name} /></span>
          </label>
        </form>
        <div className="modal__buttons">
          <span className="cancel__modal" onClick={() => setActiveModal(false)}>
            <Button disabled={!formValid} className="cancel__modal" name={buttonsNames[3].name} />
          </span>
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
