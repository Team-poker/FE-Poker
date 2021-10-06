import React from 'react';
import { IMessage } from '../../../ts/interfaces/app_interfaces';
import { Member } from '../../Member/Member';
import './Message.scss'

export const Message = ({text, member}: any) => (
  <li className='message_body'>
    <div className='message_text'>
      <p>{text}</p>
    </div>
    <Member member={member}/>
  </li>

);
