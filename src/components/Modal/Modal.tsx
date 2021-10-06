import React from 'react';
import './Modal.scss';

interface ModalProps {
    setActive: (arg0: boolean) => void;
    active: boolean;
    children: any
}

const Modal = ({ active, setActive, children }:ModalProps) => {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className={active ? 'modal__content active' : 'modal__content'} onClick={(e: any) => e.stopPropagation()}>
        {children}
      </div>

    </div>
  );
};

export default Modal;
