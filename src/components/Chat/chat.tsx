import React from 'react';
import MessageForm  from './MessageForm/MessageForm';
import MessagesList from './MessagesList/MessagesList'
import './Chat.scss'

export const Chat = ({socket}: any) => {
  return (
    <div className='chat'>
      <MessagesList socket={socket}/>
      <MessageForm socket={socket}/>
    </div>
  )
}