import React from "react";
import MessageForm from "./MessageForm/MessageForm";
import MessagesList from "./MessagesList/MessagesList";
import "./Chat.scss";

const Chat = ({ socket }: any) => {
  console.log("SOCKET ID", socket.id);
  return (
    <div className="chat">
      <MessagesList socket={socket} />
      <MessageForm socket={socket} />
    </div>
  );
};

export default Chat;
