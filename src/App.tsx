import React from "react";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import "./App.css";

import { TodoItem } from "./models";

function App() {
  const [todos, setTodos] = React.useState<TodoItem[]>([]);
  const addTodo = (text: string) => setTodos([...todos, { text }]);
  return (
    <div className="app">
      <TodoForm addTodo={addTodo} />
      <div className="todo-list" data-testid="todo-list">
        {todos.map((todo: TodoItem, index: number) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
