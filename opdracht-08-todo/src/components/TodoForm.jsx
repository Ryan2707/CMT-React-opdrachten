import { useState } from "react";

export default function TodoForm({ onAdd, children }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!onAdd) return;

    onAdd(input);
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        className="text-gray-800 bg-white"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Typ een nieuwe To-Do"
        aria-label="Nieuwe todo"
      />


      <button type="submit" className="flex items-center">
        {children}
      </button>
    </form>
  );
}
