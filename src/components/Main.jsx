import { useEffect, useState } from "react";
import Header from "./Header";
import TodoItem from "./TodoItem";
import Footer from "./Footer";
import savedTodos from "../lib/savedTodos.json";

const Main = () => {
  const [todos, setTodos] = useState(savedTodos);
  const [incompletedCount, setIncompletedCount] = useState(todos.length);

  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    switch (filter) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed));
        break;
      case "incomplete":
        setFilteredTodos(todos.filter((todo) => !todo.completed));
        break;
      default:
        setFilteredTodos(todos);
    }
    setIncompletedCount(todos.filter((todo) => !todo.completed).length);
  }, [filter, todos]);
  return (
    <main>
      <Header
        todos={todos}
        setTodos={setTodos}
        setFilter={setFilter}
        setIncompletedCount={setIncompletedCount}
      />
      <ul id="todo-list">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })}
      </ul>
      <Footer
        todos={todos}
        setTodos={setTodos}
        setFilter={setFilter}
        incompletedCount={incompletedCount}
      />
    </main>
  );
};

export default Main;
