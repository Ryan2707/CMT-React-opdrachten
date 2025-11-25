import Message from "./Message.jsx";

function MessageList({ messages }) {
  return (
    <div>
      {messages.map((msg, index) => (
        <Message key={index} text={msg} />
      ))}
    </div>
  );
}

export default MessageList;
