import React from 'react';
import './Switch.scss';
const Switch = ({props}: any) => (
  <>
    <div className="switch">
      <input type="checkbox" className="checkbox" id={props} />
      <label htmlFor={props} className="checkbox-label" />
      <span className="switch-bg" />
    </div>
  </>
);

export default Switch;
