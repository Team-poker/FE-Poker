import React from 'react';
import MessageForm  from './MessageForm/MessageForm';
import MessagesList from './MessagesList/MessagesList'
import s from './Chat.module.scss'

export const Chat = () => {
  return (
    <div className={s.chat}>
      <MessagesList />
      <MessageForm />
    </div>
  )
}