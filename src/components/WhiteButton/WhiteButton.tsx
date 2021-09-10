import React from 'react';
import './WhiteButton.scss';

const WhiteButton = (props: any) => {
  const { name } = props;
  return (
    <div>
      <button className="white-button">
        {name}
      </button>
    </div>
  );
};
export default WhiteButton;