import React from 'react';
import { IMember, IMessage } from '../../ts/interfaces/app_interfaces';
import './Member.scss'

export const Member = ({member}: IMember & any) => {
  if (!member) return <div className='member'></div>;
  const {firstName, lastName, jobPosition, image} = member;
  const firstLetter = firstName.slice(0, 1).toUpperCase();
  const secondLetter = String(lastName).slice(0, 1).toUpperCase();
  const avaLetters = firstLetter.concat(secondLetter);

  return (
    <div className='member'>
      <div className='member_avatar'>
        {!image ? <span>{avaLetters}</span> : <img src={image} alt={firstName + ' ' + lastName}></img>}
      </div>
      <div >
        <p className='member_name'>{firstName + ' ' + lastName}</p>
        <p className='member_position'>{jobPosition}</p>
      </div>
      <button className='member_block_btn'></button>
    </div>
  )
};
