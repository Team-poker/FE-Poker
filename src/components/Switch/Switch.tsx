import React from 'react';
import './Switch.scss';
const Switch = () => (
  <>
    <div className="switch">
      <input type="checkbox" className="checkbox" id="checkbox" />
      <label htmlFor="checkbox" className="checkbox-label" />
      <span className="switch-bg" />
    </div>
  </>
);

export default Switch;
