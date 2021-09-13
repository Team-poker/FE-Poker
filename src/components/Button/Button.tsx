import React, {useState} from 'react';
import './Button.scss';

const Button = (props: any) => {
  const { name, disabled } = props;
  return (
    <>
      <button disabled={disabled} className={`button ${disabled && 'disabled'}`}>
        {name}
      </button>
    </>
  );
};

export default Button;
