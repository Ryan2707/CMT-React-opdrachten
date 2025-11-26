import { useState } from "react";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";

export default function App() {
  // todos is een array van objecten: { id: number, text: string }
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    const trimmed = text.trim();
    if (trimmed === "") return;
    const newTodo = { id: Date.now(), text: trimmed };
    setTodos((prev) => [...prev, newTodo]);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Simple To-Do</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}