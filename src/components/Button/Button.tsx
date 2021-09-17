import React, {useState} from 'react';
import './Button.scss';

const Button = (props: any) => {
  const { name, disabled, type } = props;
  return (
    <>
      <button disabled={disabled} className={`button ${disabled && 'disabled'}`} type={type}>
        {name}
      </button>
    </>
  );
};

export default Button;
