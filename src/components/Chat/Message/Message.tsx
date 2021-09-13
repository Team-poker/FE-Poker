import React from 'react';
import { IMessage } from '../../../ts/interfaces/app_interfaces';
import { Member } from '../../Member/Member';
import s from './Message.module.scss'

export const Message = ({text, member}: IMessage) => (
  <li className={s.message_body}>
    <div className={s.message_text}>
      <p>{text}</p>
    </div>
    <Member member={member}/>
  </li>

);
