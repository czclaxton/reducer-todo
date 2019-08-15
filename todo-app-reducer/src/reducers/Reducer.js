export const initialState = {
  todoArray: [
    {
      name: "Mow the lawn",
      id: Date.now(),
      completed: false
    },
    {
      name: "Get a haircut",
      id: 23452345234,
      completed: false
    }
  ]
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_ITEM": {
      return {
        ...state,
        todoArray: state.todoArray.map(item => {
          if (item.id === action.payload) {
            return {
              ...item,
              completed: !item.completed
            };
          } else {
            return item;
          }
        })
      };
    }
    case "ADD_ITEM": {
      const newItem = {
        name: action.payload,
        id: Date.now(),
        completed: false
      };
      return {
        ...state,
        todoArray: [...state.todoArray, newItem]
      };
    }
    case "CLEAR_COMPLETED": {
      return {
        ...state,
        todoArray: state.todoArray.filter(item => item.completed === false)
      };
    }

    default:
      return state;
  }
};
