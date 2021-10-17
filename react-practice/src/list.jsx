import { ThemeContext } from "./context/theme-context";

export default function List({ loading, todos }) {
  let todoList = <div> loading Lists....</div>;
  if (!loading) todoList = todos.map((value, index) => <li key={index}>{value.title}</li>);
  return (
    <>
      <ThemeContext.Consumer>{(ThemeContext) => ThemeContext.color}</ThemeContext.Consumer>
      <ul>{todoList}</ul>
    </>
  );
}
