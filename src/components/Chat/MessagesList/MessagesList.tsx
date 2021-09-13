import React from 'react';
import { connect } from 'react-redux';
import { IMessagesList, IMessage } from '../../../ts/interfaces/app_interfaces';
import { Message } from '../Message/Message'
import s from './MessagesList.module.scss'

const MessagesList = ({messages}: any) => {
  if (!messages.length) {
    return <p>Сообщений пока нет.</p>
  }
  
  return (
    <ul className={s.messages_list}>
      {messages.map((mes: IMessage) => <Message text={mes.text} member={mes.member} key={mes.id} />)}
    </ul>
    )
};

const mapStateToProps = (state: any) => {
  return {
    messages: state.messages.messages
  };
} 

export default connect(mapStateToProps, null)(MessagesList);