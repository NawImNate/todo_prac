import "./App.css";
import React, { useState } from "react";

function App() {
  // use state to keep track of array of todos
  const [todos, setTodos] = useState([]);
  // use state for a todo
  const [todo, setTodo] = useState("");

  // create handleSubmit function
  function handleSubmit(e) {
    // prevents page refresh
    e.preventDefault();

    // create new obj newTodo
    const newTodo = {
      // id make it a unique value
      id: new Date().getTime(),
      // add another prop text.
      text: todo,
      completed: false,
    };
    // take current todos and make a new todo part of the todos array. Concat makes it part of the new array.
    setTodos([...todos].concat(newTodo));
    setTodo("");
  }

  return (
    <div className="App">
      {/* onsubmit handler, pass in a func called handleSubmit */}
      <form onSubmit={handleSubmit}>
        {/* set your todo through onchange in input. equal to an arrow func, passing e as param, make setter func (setTodo) pass e.target.value, assign value as todo. */}
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">submit</button>
      </form>
      {/* map over todos, arrow function, name every element todo, pass that as the param */}
      {todos.map((todo) => (
        <div>{todo.text}</div>
      ))}
    </div>
  );
}

export default App;
