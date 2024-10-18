import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import initialTodos from "./lib/initialTodos.json";

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState("");
  const [incompletedCount, setIncompletedCount] = useState(todos.length);
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);

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
  }, [filter, todos]);

  useEffect(() => {
    setIncompletedCount(todos.filter((todo) => !todo.completed).length);
  }, [filter, todos]);

  return (
    <div className="App">
      <h1>todos</h1>
      <input
        type="checkbox"
        id="handle-complete"
        checked={todos.every((el) => el.completed)}
        onChange={handleComplete}
      />
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
      <h2>{incompletedCount} todos left</h2>
      <ol id="todo-list">
        {filteredTodos.map((todo) => {
          return (
            <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
          );
        })}
      </ol>
    </div>
  );
}

export default App;
