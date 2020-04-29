import React from "react";

import { TodoItem } from "../models";

type Props = {
  index: number;
  todo: TodoItem;
};

const Todo = ({ index, todo }: Props) => (
  <div key={index} className="todo">
    {todo.text}
  </div>
);

export default Todo;
