import React, { useState, useRef } from "react";

import List from "./List";
import InputForm from "./InputForm";

export default function Body() {
  const [todoList, setTodoList] = useState([]);
  const [index, setIndex] = useState(0);
  const [newTodo, setNewTodo] = useState({});
  const inputTag = useRef();

  function clearInput() {
    inputTag.current.value = "";
    setNewTodo({});
  }

  function handleSubmitNewTodo() {
    const newTodoObj = {
      key: index,
      value: newTodo,
    };
    setTodoList([...todoList, newTodoObj]);
    setIndex((prev) => prev + 1);
    clearInput();
  }

  function handleNewTodoChange(event) {
    setNewTodo(event.target.value);
  }

  return (
    <div>
      <List todoList={todoList} />
      <InputForm inputTag={inputTag} handleSubmitNewTodo={handleSubmitNewTodo} handleNewTodoChange={handleNewTodoChange} />
    </div>
  );
}
