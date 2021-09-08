import React, { useState } from 'react';
import Button from '../../components/Button/Button.tsx';
import Header from './blocks/Header/Header.tsx';
import Main from './blocks/Main/Main.tsx';
import Footer from './blocks/Footer/Footer.tsx';
import './MainPage.scss';
import BaseModalWrapper from '../../components/Modal/BaseModalWrapper';

const MainPage = () => {
  const buttonsNames = [
    {
      name: 'Start new game',
    },
    {
      name: 'Connect',
    },
  ];
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible((wasModalVisible: any) => !wasModalVisible);
  };

  return (
    <>
      <Header />
      <Main />
      <BaseModalWrapper isModalVisible={isModalVisible} onBackDropClick={toggleModal} />
      <Button className="button-link" name={buttonsNames[0].name} onClick={toggleModal} />
      <Footer />
    </>
  );
};
export default MainPage;
