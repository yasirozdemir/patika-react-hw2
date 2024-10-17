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
    setIsCompleted(!isCompleted);
    if (e.target.checked) {
      todos[id].completed = true;
      setTodos(todos);
    } else {
      todos[id].completed = false;
      setTodos(todos);
    }
    setCompletedCount(todos.filter((todo) => todo.completed).length);
  };

  const handleEdit = (e) => {
    const newText = e.target.value;
    setEditedText(newText);
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
