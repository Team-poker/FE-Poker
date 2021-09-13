import React, { useState } from 'react';
import { connect, MapDispatchToProps } from 'react-redux';
import { createMessage } from '../../../redux/actions';
import s from './MessageForm.module.scss'

const MessageForm = (props: any) => {
  const [text, setText] = useState('');

  const submitHandler = (event: any) => {
    event.preventDefault();

    if (!text.trim()) {
      return
    }

    const newMessage = {
      id: Date.now(), 
      text
    }
    props.createMessage(newMessage);
    setText('')
  };

  const changeInputHandler = (event: any) => {
    event.persist();
    setText(event.target.value)
  }

  return (
    <form action="" onSubmit={submitHandler} className={s.form}>
      <div className="form-group">
        <input 
          type="text" 
          className={s.form_input} 
          value={text}
          name='text'
          placeholder='Сообщение'
          onChange={changeInputHandler}/>
        <button className={s.form_submit_btn} type="submit">Отправить</button>
      </div>
    </form>
  );
};

const mapDispatchToProps = {
  createMessage
}

export default connect(null, mapDispatchToProps)(MessageForm);

