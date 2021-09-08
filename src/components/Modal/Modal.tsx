import React from 'react';
import ReactDOM from 'react-dom';


interface ModalProps {
   onBackDropClick: () => void;
}

const Modal = ({ onBackDropClick }:ModalProps) => {
  return ReactDOM.createPortal(
    <div onClick={onBackDropClick} />, document.getElementById('modal-root'),
  );
};

export default Modal;
