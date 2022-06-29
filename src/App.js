import "./App.css";
import React, { useState } from "react";

function App() {
  // use state to keep track of array of todos
  const [todos, setTodos] = useState([]);
  // use state for a todo
  const [todo, setTodo] = useState("");
  // use state for editing. null by default, going to be id of todo I are editing
  const [todoEditing, setTodoEditing] = useState(null);
  // keep track of text of todo we are editing
  const [editingText, setEditingText] = useState("");

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

  // delete todo function. pass todo id as param
  function deleteTodo(id) {
    // shorten array of todos
    // filter will take an arrow funciton and act like a map
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  // function for checkbox, pass todo id as param
  function toggleComplete(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updatedTodos);
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
        <button type="submit">Add Todo</button>
      </form>
      {/* map over todos, arrow function, name every element todo, pass that as the param */}
      {todos.map((todo) => (
        // unique key prop needed.
        <div key={todo.id}>
          {/* surround todo text inside of its own div to keep organized.  */}
          <div className="todo-item">
            {todo.text}
            {/* create another input, takes in onchange method to use event variable in function to set editing text pass e target value as param. */}
            <input
              onChange={(e) => setEditingText(e.target.value)}
              value={editingText}
            />
            {/* add delete button to delete todo, pass deleteTodo function in arrow function inside of onclick for button  */}
            <button
              className="todo-item-delete"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
            {/* add a checkbox w a function */}
            <input
              type="checkbox"
              onChange={() => toggleComplete(todo.id)}
              checked={todo.completed}
            />
            {/* make a button to edit todos, add onclick and pass in function for set todo editing pass in todo id.  */}
            <button onClick={() => setTodoEditing(todo.id)}>Edit Todo</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
