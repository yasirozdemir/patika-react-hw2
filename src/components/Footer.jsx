import { useEffect, useState } from "react";

const Footer = ({ todos, setTodos, filter, setFilter, incompletedCount }) => {
  //   const [completedCount, setCompletedCount] = useState(0);
  const [activeTab, setActiveTab] = useState(filter);

  const clearCompleted = () => {
    setTodos(todos.filter((el) => !el.completed));
  };

  useEffect(() => {
    setActiveTab(filter);
  }, [filter]);

  //   useEffect(() => {
  //     setCompletedCount(todos.filter((el) => el.completed).length);
  //   }, [todos]);

  return (
    <footer>
      <p>{incompletedCount} todos left</p>
      {/* <p>completed {completedCount}</p> */}
      <div>
        <button
          className={activeTab === "all" ? "active" : ""}
          onClick={() => {
            setFilter("all");
          }}
        >
          All
        </button>
        <button
          className={activeTab === "completed" ? "active" : ""}
          onClick={() => {
            setFilter("completed");
          }}
        >
          Completed
        </button>
        <button
          className={activeTab === "incomplete" ? "active" : ""}
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
