import React from "react";

import Li from "./Li";

export default function List({ todoList }) {
  function handleClick(event) {
    console.log(event.target);
  }

  const todos = todoList.map((todo) => <Li ekey={todo.key} value={todo.value} handleClick={handleClick} />);
  return <ul>{todos}</ul>;
}
