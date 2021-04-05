import React, { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            ref={inputRef}
            name="text"
            className="todo-input edit"
          />

          <button className="todo-button edit">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            ref={inputRef}
            name="text"
            className="todo-input"
          />

          <button className="todo-button">Add todo</button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
