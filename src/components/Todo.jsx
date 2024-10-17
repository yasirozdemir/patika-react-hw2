import { useState } from "react";

const Todo = ({
  todo: { text, completed, id },
  todos,
  setTodos,
  setCompletedCount,
}) => {
  const [editedText, setEditedText] = useState(text);
  const [isCompleted, setIsCompleted] = useState(completed);

  const handleCheck = (e) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: e.target.checked } : todo
    );
    setTodos(updatedTodos);
    setIsCompleted(e.target.checked);
    setCompletedCount(updatedTodos.filter((todo) => todo.completed).length);
  };

  const handleEdit = (e) => {
    const newText = e.target.value;
    setEditedText(newText);
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <>
      <li className={isCompleted ? "completed" : "incomplete"}>
        <input type="checkbox" checked={isCompleted} onChange={handleCheck} />
        <input
          type="text"
          value={editedText}
          disabled={isCompleted}
          onChange={handleEdit}
        />
      </li>
    </>
  );
};

export default Todo;
