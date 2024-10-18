import { useEffect, useState } from "react";

const Footer = ({ todos, setTodos, setFilter, incompletedCount }) => {
  const [completedCount, setCompletedCount] = useState(0);

  const clearCompleted = () => {
    setTodos(todos.filter((el) => !el.completed));
  };

  useEffect(() => {
    setCompletedCount(todos.filter((el) => el.completed).length);
  }, [todos]);

  return (
    <footer>
      <button
        onClick={() => {
          setFilter("all");
        }}
      >
        All
      </button>
      <button
        onClick={() => {
          setFilter("completed");
        }}
      >
        Completed
      </button>
      <button
        onClick={() => {
          setFilter("incomplete");
        }}
      >
        Incomplete
      </button>
      <h2>{incompletedCount} todos left</h2>
      <h2>completed {completedCount}</h2>
      <button onClick={clearCompleted}>Clear completed</button>
    </footer>
  );
};

export default Footer;
