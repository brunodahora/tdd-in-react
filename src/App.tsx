import React from "react";
import TodoForm from "./components/TodoForm";
import "./App.css";

type TodoItem = {
  text: string;
};

function App() {
  const [todos, setTodos] = React.useState<TodoItem[]>([]);
  const addTodo = (todo: string) => setTodos([...todos, { text: todo }]);
  return (
    <div className="app">
      <TodoForm addTodo={addTodo} />
      <div className="todo-list" data-testid="todo-list">
        {todos.map((todo: TodoItem, index: number) => (
          <div key={index} className="todo">
            {todo.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
