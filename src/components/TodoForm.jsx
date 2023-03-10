import { useState } from "react";
import { useTodoContext } from "../providers/TodoProvider";

const TodoForm = () => {
  const { todoList, getNumberOfTodoItems, addTodo } = useTodoContext();
  const [todoItem, setTodoItem] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    addTodo(todoItem);

    setTodoItem("");
    console.log("new todo", todoItem);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h3>Number of todo items: {getNumberOfTodoItems()}</h3>
      <input
        type="text"
        value={todoItem}
        onChange={(e) => setTodoItem(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoForm;
