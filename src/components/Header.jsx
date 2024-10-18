import { useState } from "react";

const Header = ({ todos, setTodos, setFilter, setIncompletedCount }) => {
  const [newTodo, setNewTodo] = useState("");

  const addNewTodo = (e) => {
    setTodos([...todos, { text: newTodo, completed: false, id: Date.now() }]);
    setNewTodo("");
    e.preventDefault();
  };

  const handleComplete = () => {
    const isAllCompleted = todos.every((el) => el.completed);
    if (isAllCompleted) {
      const updatedTodos = todos.map((todo) => ({ ...todo, completed: false }));
      setFilter("all");
      setTodos(updatedTodos);
      setIncompletedCount(updatedTodos.length);
    } else {
      const updatedTodos = todos.map((todo) => ({ ...todo, completed: true }));
      setFilter("all");
      setTodos(updatedTodos);
      setIncompletedCount(0);
    }
  };

  return (
    <>
      <section>
        <h1>todos</h1>
        <input
          type="checkbox"
          id="handle-complete"
          checked={todos.every((el) => el.completed)}
          onChange={handleComplete}
        />
        <input
          type="text"
          id="add-todo"
          value={newTodo}
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter")
              e.target.value !== ""
                ? addNewTodo(e)
                : alert("You should enter text!");
          }}
        />
      </section>
    </>
  );
};

export default Header;
