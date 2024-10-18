// import { useEffect, useState } from "react";

const Footer = ({ todos, setTodos, setFilter, incompletedCount }) => {
  //   const [completedCount, setCompletedCount] = useState(0);

  const clearCompleted = () => {
    setTodos(todos.filter((el) => !el.completed));
  };

  //   useEffect(() => {
  //     setCompletedCount(todos.filter((el) => el.completed).length);
  //   }, [todos]);

  return (
    <footer>
      <p>{incompletedCount} todos left</p>
      {/* <p>completed {completedCount}</p> */}
      <div>
        <button
          autoFocus={true}
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
      </div>
      <button
        onClick={clearCompleted}
        id="clear-completed"
        className={todos.some((el) => el.completed) ? "" : "hidden"}
      >
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
