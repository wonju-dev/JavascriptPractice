import React from "react";

import { connect } from "react-redux";

import Li from "./Li";

function List({ todo }) {
  const todos = { todo }.todo.map((todoElement) => <Li ekey={todoElement.key} value={todoElement.value} />);
  return <ul>{todos}</ul>;
}

const mapStateToProps = (state) => {
  return {
    todo: state.todo,
  };
};
export default connect(mapStateToProps)(List);
