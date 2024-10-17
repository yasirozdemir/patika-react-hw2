import { useState } from "react";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [completedCount, setCompletedCount] = useState(0);

  const addNewTodo = (e) => {
    setTodos([...todos, { text: newTodo, completed: false, id: todos.length }]);
    setNewTodo("");
    e.preventDefault();
  };

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
        <button>All</button>
        <button>Completed</button>
        <button>Incomplete</button>
      </div>
      <h2>Completed Todos: {completedCount}</h2>
      <ol id="todo-list">
        {todos.map((todo, i) => {
          return (
            <Todo
              key={i}
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
