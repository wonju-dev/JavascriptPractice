import React from "react";

export default function InputForm(props) {
  return (
    <>
      <input ref={props.inputTag} onChange={props.handleNewTodoChange} type="text" placeholder="new Todo is"></input>
      <button onClick={props.handleSubmitNewTodo}>add!</button>
    </>
  );
}
