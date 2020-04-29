import React from "react";

import { TodoItem } from "../models";

type Props = {
  index: number;
  todo: TodoItem;
  completeTodo: (index: number) => void;
  removeTodo: (index: number) => void;
};

const Todo = ({ index, todo, completeTodo, removeTodo }: Props) => (
  <div
    className="todo"
    style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
  >
    {todo.text}

    <div>
      {!todo.isCompleted && (
        <button className="todo-button" onClick={() => completeTodo(index)}>
          Complete
        </button>
      )}
      <button className="todo-button" onClick={() => removeTodo(index)}>
        x
      </button>
    </div>
  </div>
);

export default Todo;
