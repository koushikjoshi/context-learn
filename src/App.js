import logo from "./logo.svg";
import "./App.css";
import React, { createContext, useContext } from "react";
import TodoProvider from "./providers/TodoProvider";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const AppContext = createContext({ todos: [] });

function App() {
  return (
    <div className="App">
      <h1>Todo list</h1>

      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
