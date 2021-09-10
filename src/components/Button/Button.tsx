import React, {useState} from 'react';
import './Button.scss';

const Button = (props: any) => {
  const { name } = props;
  return (
    <div>
      <button className="button">
        {name}
      </button>
    </div>
  );
};

export default Button;
