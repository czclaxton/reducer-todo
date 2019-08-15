import React from "react";

const TodoList = ({ todoArray, toggleItem, clearCompleted }) => {
  return (
    <div className="todoItems">
      {todoArray.map(item => (
        <div
          className={item.completed ? "completed" : ""}
          onClick={() => toggleItem(item.id)}
          key={item.id}
        >
          {item.name}
        </div>
      ))}
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default TodoList;
