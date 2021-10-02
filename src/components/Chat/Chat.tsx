import React from 'react';
import MessageForm  from './MessageForm/MessageForm';
import MessagesList from './MessagesList/MessagesList'
import './Chat.scss'
import { connect } from 'react-redux';

const Chat = ({socket, isChatOpen}: any) => {
  return (
    <div className={!isChatOpen ? 'chat-wrap' : 'chat-wrap open'}>
      <div className="empty-space"></div>
      <div className='chat'>
        <MessagesList socket={socket}/>
        <MessageForm socket={socket}/>
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    isChatOpen: state.isChatOpen
  };
}

export default connect(mapStateToProps, null)(Chat)
