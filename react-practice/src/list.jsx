export default function List({ loading, todos }) {
  let todoList = <div> loading Lists....</div>;
  if (!loading) todoList = todos.map((value, index) => <li key={index}>{value.title}</li>);
  return <ul>{todoList}</ul>;
}
