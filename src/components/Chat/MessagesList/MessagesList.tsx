import React from 'react';
import { connect } from 'react-redux';
import { createMessage } from '../../../redux/actions';
import { IMessage } from '../../../ts/interfaces/app_interfaces';
import { Message } from '../Message/Message'
import './MessagesList.scss'

const MessagesList = ({messages, socket}: any) => {
  if (messages.length === 0) {
    return <p>Сообщений пока нет.</p>
  }

  socket.on("message", (data: any) => {
    const newMessage = {
      id: Date.now(),
      member: {
        userId: data.userId,
        firstName: data.firstName,
        lastName: data.lastName,
        jobPosition: data.jobPosition
      },
      text: data.text
    }

    createMessage(newMessage);

  });
  
  return (
    <ul className='messages_list'>
      {messages.map((mes: IMessage) => <Message text={mes.text} member={mes.member} key={mes.id} />)}
    </ul>
    )
};

const mapStateToProps = (state: any) => {
  return {
    messages: state.messages
  };
} 

export default connect(mapStateToProps, null)(MessagesList);