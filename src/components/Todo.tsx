import React from "react";

import { TodoItem } from "../models";

type Props = {
  index: number;
  todo: TodoItem;
  completeTodo: (index: number) => void;
};

const Todo = ({ index, todo, completeTodo }: Props) => (
  <div
    className="todo"
    style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
  >
    {todo.text}

    {!todo.isCompleted && (
      <div>
        <button className="todo-button" onClick={() => completeTodo(index)}>
          Complete
        </button>
      </div>
    )}
  </div>
);

export default Todo;
