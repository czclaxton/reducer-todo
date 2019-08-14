import React, { useReducer, useState } from "react";

import Item from "./Item";

const TodoList = props => {
  return (
    <div className="todoItems">
      {props.item.map(item => (
        <Item key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button onClick={props.clearCompleted}>Clear Completed Tasks</button>
    </div>
  );
};

export default TodoList;
