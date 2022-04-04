import React from 'react';
import NewMessageForm from './NewMessageForm';

const MessagesArea = (
  props
) => {
  const {chatroom, user_id} = props
  return (
    <div className="messagesArea">
      <h2>{chatroom && chatroom.name}</h2>
      <ul>{orderedMessages(chatroom && chatroom.messages)}</ul>
      <NewMessageForm chatroom_id={chatroom.id} user_id={user_id} />
    </div>
  );
};

export default MessagesArea;

// helpers

const orderedMessages = messages => {
  console.log('messages', messages);
  // const sortedMessages = messages.sort(
  //   (a, b) => new Date(a.created_at) - new Date(b.created_at)
  // );
  return messages.map(message => {
    return <li key={message.id}>{message.body}</li>;
  });
};