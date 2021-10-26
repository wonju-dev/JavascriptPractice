import { createStore } from "redux";

const initState = {
  todo: [],
  newTodo: "",
};

const ACTION_TYPE = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "ADD_TODO",
  UPDATE_TODO: "UPDATE_TODO",
};
export const updateNewTodo = (event) => {
  return {
    type: ACTION_TYPE.UPDATE_TODO,
    value: event.target.value,
  };
};

export const addNewTodo = () => {
  return {
    type: ACTION_TYPE.ADD_TODO,
  };
};

export const deleteTodo = () => {
  return {
    type: ACTION_TYPE.DELETE_TODO,
  };
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, action.newTodo],
      };
    case ACTION_TYPE.DELETE_TODO:
      return {
        ...state,
        todo: state.todo.filter((value) => value !== action.targetTodo),
      };
    case ACTION_TYPE.UPDATE_TODO:
      return {
        ...state,
        newTodo: action.value,
      };
    default:
      return state;
  }
};

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
