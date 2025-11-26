import { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!onAdd) return;
    onAdd(input);
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Typ een nieuwe To-Do"
        aria-label="Nieuwe todo"
      />
      <button type="submit">Toevoegen</button>
    </form>
  );
}
