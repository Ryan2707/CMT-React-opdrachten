import { useState } from "react";

export default function CreateMessage({ messages, setMessages }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();


    setMessages([...messages, input]);


    setInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Plaats bericht</button>
    </form>
  );
}
