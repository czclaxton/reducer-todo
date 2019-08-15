import React, { useState, useReducer } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import { initialState, Reducer } from "./reducers/Reducer";

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const toggleItem = id => {
    dispatch({
      type: "TOGGLE_ITEM",
      payload: id
    });
  };

  const addItem = item => {
    dispatch({
      type: "ADD_ITEM",
      payload: item
    });
  };

  const clearCompleted = () => {
    dispatch({
      type: "CLEAR_COMPLETED"
    });
  };

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <hr />
      <TodoForm addItem={addItem} />
      <TodoList
        todoArray={state.todoArray}
        toggleItem={toggleItem}
        clearCompleted={clearCompleted}
      />
    </div>
  );
}

export default App;
