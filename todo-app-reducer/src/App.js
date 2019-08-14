import React, { useState, useReducer } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import {
  initialState,
  TodoReducer,
  ADD_ITEM,
  TOGGLE_ITEM,
  CLEAR_COMPLETED
} from "./reducers/TodoReducer";

function App() {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const addItem = (event, item) => {
    dispatch({
      type: ADD_ITEM,
      payload: item
    });
  };

  const toggleItem = itemId => {
    dispatch({
      type: TOGGLE_ITEM,
      payload: itemId
    });
  };

  const clearCompleted = event => {
    dispatch({
      type: CLEAR_COMPLETED
    });
  };
  return (
    <div className="App">
      <h1>My Todo List</h1>
      <TodoForm addItem={addItem} />
      <hr />
      <TodoList
        item={state.todo}
        toggleItem={toggleItem}
        clearCompleted={clearCompleted}
      />
    </div>
  );
}

export default App;
