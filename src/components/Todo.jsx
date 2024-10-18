import { useEffect, useState } from "react";

const Todo = ({ todo: { text, completed, id }, todos, setTodos }) => {
  const [editedText, setEditedText] = useState(text);
  const [isCompleted, setIsCompleted] = useState(completed);

  useEffect(() => {
    setIsCompleted(completed);
  }, [completed]);

  const handleCheck = (e) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: e.target.checked } : todo
    );
    setTodos(updatedTodos);
    setIsCompleted(e.target.checked);
  };

  const handleEdit = (e) => {
    const newText = e.target.value;
    setEditedText(newText);
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDelete = () => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
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
        <button onClick={handleDelete}>delete</button>
      </li>
    </>
  );
};

export default Todo;
