import React from 'react';
import { IMember, IMessage } from '../../ts/interfaces/app_interfaces';
import s from './Member.module.scss'

export const Member = ({member}: IMember & any) => {
  if (!member) return <div className={s.member}></div>;
  const {firstName, lastName, position, image} = member;
  const firstLetter = firstName.slice(0, 1).toUpperCase();
  const secondLetter = String(lastName).slice(0, 1).toUpperCase();
  const avaLetters = firstLetter.concat(secondLetter);
  return (
    <div className={s.member}>
      <div className={s.member_avatar}>
        {!image ? <span>{avaLetters}</span> : <img src={image} alt={firstName + ' ' + lastName}></img>}
      </div>
      <div >
        <p className={s.member_name}>{firstName + ' ' + lastName}</p>
        <p className={s.member_position}>{position}</p>
      </div>
      <button className={s.member_block_btn}></button>
    </div>
  )
};
