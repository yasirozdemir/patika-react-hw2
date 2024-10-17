import { useState } from "react";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [completedCount, setCompletedCount] = useState(0);
  const [filter, setFilter] = useState("all");

  const addNewTodo = (e) => {
    setTodos([...todos, { text: newTodo, completed: false, id: Date.now() }]);
    setNewTodo("");
    e.preventDefault();
  };

  const getFilteredTodos = () => {
    switch (filter) {
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "incomplete":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };

  const filteredTodos = getFilteredTodos();

  return (
    <div className="App">
      <h1>todos</h1>
      <input
        type="text"
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
      <div>
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
      </div>
      <h2>Completed Todos: {completedCount}</h2>
      <ol id="todo-list">
        {filteredTodos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              setCompletedCount={setCompletedCount}
            />
          );
        })}
      </ol>
    </div>
  );
}

export default App;
