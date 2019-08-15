import React, { useState } from "react";

const TodoForm = ({ addItem }) => {
  const [state, setState] = useState("");
  const handleChange = e => {
    setState(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    addItem(state);
    setState("");
  };
  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add items here"
          name="item"
          value={state}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
