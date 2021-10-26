import React from "react";

import { connect } from "react-redux";
import { updateNewTodo, addNewTodo } from "../store/store";

function InputForm({ updateNewTodo, addNewTodo }) {
  return (
    <>
      <input onChange={updateNewTodo} placeholder="new Todo is"></input>
      <button onClick={addNewTodo}>add!</button>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewTodo: () => dispatch(addNewTodo()),
    updateNewTodo: () => dispatch(updateNewTodo()),
  };
};

export default connect(mapDispatchToProps)(InputForm);
