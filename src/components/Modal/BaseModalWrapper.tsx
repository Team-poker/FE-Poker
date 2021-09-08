import React from 'react';
import Modal from '../Modal/Modal';

interface BaseModalWrapperProps {
    isModalVisible: boolean,
    onBackDropClick: () => void,
}
const BaseModalWrapper = ({ onBackDropClick, isModalVisible }: BaseModalWrapperProps) => {
  if (!isModalVisible) {
    return null;
  }
  return (<Modal onBackDropClick={onBackDropClick} />);
};
export default BaseModalWrapper;
