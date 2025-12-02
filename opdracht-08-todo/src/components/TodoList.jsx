import TodoItem from "./TodoItem.jsx";

export default function TodoList({ todos = [] }) {
  if (todos.length === 0) {
    return <p className="text-white">Geen To-Do's (nog niet toegevoegd)</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} text={todo.text} />
      ))}
    </ul>
  );
}
