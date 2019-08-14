import React, { useState } from "react";

import { initialState, ListReducer } from "../reducers/TodoReducer";

const TodoForm = props => {
  const [item, setItem] = useState("");

  const handleChanges = event => {
    setItem({ [event.target.name]: event.target.value });
  };

  const submitItem = event => {
    event.preventDefault();
    setItem({ item: "" });
    props.addItem(event, item);
  };

  return (
    <div className="wrapper">
      <form onSubmit={submitItem}>
        <div className="formWrapper">
          <input
            type="text"
            name="item"
            placeholder="Add a new item!"
            onChange={handleChanges}
            value={item.item}
          />
          <button>Add</button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
