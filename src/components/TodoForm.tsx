import React from "react";

type Props = {
  addTodo: (todo: string) => void;
};

function TodoForm({ addTodo }: Props) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Add a to-do"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

export default TodoForm;
