import { useState } from "react";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";
import "./App.css";
import { MdOutlineAddBox } from "react-icons/md";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    const trimmed = text.trim();
    if (trimmed === "") return;
    const newTodo = { id: Date.now(), text: trimmed };
    setTodos((prev) => [...prev, newTodo]);
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <h1 className="text-white text-8xl font-bold text-center mb-10 mt-10">
        Ryan Kramer To-Do
      </h1>

      <TodoForm onAdd={addTodo}>
        <MdOutlineAddBox size={30} className="text-white cursor-pointer" />
      </TodoForm>

      <TodoList todos={todos} />
    </div>
  );
}
