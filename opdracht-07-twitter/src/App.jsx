import './App.css'
import { useState } from "react";
import CreateMessage from "./components/CreateMessage.jsx";
import MessageList from "./components/MessageList.jsx";

function App() {
 const [messages, setMessages] = useState([]);

  return (
    <>
      <h1>Opdracht 7 - Twitter</h1>
      <CreateMessage messages={messages} setMessages={setMessages} />
      <MessageList messages={messages} />
    </>
  )
}

export default App
