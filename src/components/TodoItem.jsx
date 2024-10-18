import { useEffect, useState } from "react";

const TodoItem = ({ todo: { text, completed, id }, todos, setTodos }) => {
  const [editedText, setEditedText] = useState(text);
  const [placeholder, setPlaceHolder] = useState("todo");
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
    newText === "" && setPlaceHolder("(Text)");
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
    <li className={isCompleted ? "completed" : "incomplete"}>
      <input
        type="checkbox"
        name={"check-" + id.toString()}
        checked={isCompleted}
        onChange={handleCheck}
      />
      <input
        type="text"
        name={"text-" + id.toString()}
        placeholder={placeholder}
        value={editedText}
        disabled={isCompleted}
        onChange={handleEdit}
      />
      <button onClick={handleDelete}>delete</button>
    </li>
  );
};

export default TodoItem;
