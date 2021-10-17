import React, { useState } from "react";

import { ThemeContext } from "./context/theme-context";

import useFetch from "./hooks/useFetch";

import List from "./list.jsx";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({});

  const loading = useFetch(todos, setTodos);

  const addNewTodo = () => {
    setTodos([...todos, newTodo]);
  };

  const getNewTodo = (event) => {
    setNewTodo({ title: event.target.value });
  };

  return (
    <>
      <ThemeContext.Provider value={{ color: "white" }}>
        <List loading={loading} todos={todos} />
      </ThemeContext.Provider>
      <input onChange={getNewTodo}></input>
      <button onClick={addNewTodo}></button>
    </>
  );
}
