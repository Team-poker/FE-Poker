import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { createMessage } from '../../../redux/actions';
import { IMessage } from '../../../ts/interfaces/app_interfaces';
import { Message } from '../Message/Message'
import './MessagesList.scss'

const MessagesList = ({messages, isChatOpen, socket, createMessage}: any) => {
  if (messages.length === 0) {
    return <p>Сообщений пока нет.</p>;
  }

  useEffect(() => {
    socket.on("message", (data: any) => {
      const newMessage = {
        id: Date.now(),
        member: {
          userId: data.userId,
          firstName: data.firstName,
          lastName: data.lastName,
          jobPosition: data.jobPosition,
        },
        text: data.text,
      };
  
      createMessage(newMessage);
    });
  }, [socket])

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    if(isChatOpen) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'start'});
    }
  };

  useEffect(scrollToBottom, [messages]);
  
  return (
    <ul className='messages_list'>
      {messages.map((mes: IMessage) => <Message text={mes.text} member={mes.member} key={mes.id} />)}
      <div ref={messagesEndRef} />
    </ul>
  );
};

const mapStateToProps = (state: any) => {
  return {
    messages: state.messages,
    isChatOpen: state.isChatOpen
  };
};

const mapDispatchToProps = {
  createMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);
