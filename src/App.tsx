import React from "react";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import "./App.css";

import { TodoItem } from "./models";

function App() {
  const [todos, setTodos] = React.useState<TodoItem[]>([]);

  const addTodo = (text: string) => setTodos([...todos, { text }]);

  const completeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list" data-testid="todo-list">
        <TodoForm addTodo={addTodo} />
        {todos.map((todo: TodoItem, index: number) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
