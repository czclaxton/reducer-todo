export const initialState = {
  todo: [
    {
      name: "Mow the lawn",
      id: 3892987589,
      completed: false
    },
    {
      name: "Get a haircut",
      id: 3892987564,
      completed: false
    }
  ]
};

export const TodoReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newItem = {
        name: action.payload.item,
        id: Date.now(),
        completed: false
      };
      return {
        ...state,
        todo: [...state.todo, newItem]
      };
    case TOGGLE_ITEM:
      return {
        ...state,
        todo: state.todo.map(item => {
          if (action.payload === item.id) {
            return {
              ...item,
              completed: !item.completed
            };
          }
          return item;
        })
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todo: state.todo.filter(item => !item.completed)
      };
    default:
      return state;
  }
};

export const ADD_ITEM = "ADD_ITEM";
export const TOGGLE_ITEM = "TOGGLE_ITEM";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";
