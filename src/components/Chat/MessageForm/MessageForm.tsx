import React, { useState } from 'react';
import { connect, MapDispatchToProps } from 'react-redux';
import { createMessage } from '../../../redux/actions';
import './MessageForm.scss'

const MessageForm = ({currentUser, createMessage, socket}: any) => {
  const [text, setText] = useState('');

  const submitHandler = (event: any) => {
    event.preventDefault();

    if (!text.trim()) {
      return
    }

    const member = currentUser;

    const newMessage = {
      id: Date.now(),
      member,
      text,
    }
    // createMessage(newMessage);
    socket.emit('chat', newMessage)
    setText('')
  };

  const changeInputHandler = (event: any) => {
    event.persist();
    setText(event.target.value)
  }

  return (
    <form action="" onSubmit={submitHandler} className='form'>
      <div className="form-group">
        <input 
          type="text" 
          className='form_input' 
          value={text}
          name='text'
          placeholder='Сообщение'
          
          onChange={changeInputHandler}/>
        <button className='form_submit_btn' type="submit">Отправить</button>
      </div>
    </form>
  );
};

const mapDispatchToProps = {
  createMessage
}

const mapStateToProps = (state: any) => {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);

