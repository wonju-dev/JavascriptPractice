import "./App.css";
import { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props); // 상위 Component에서 넘겨준 state가 있으면, 이를 props라는 이름으로 저장함
    this.state = {
      // 하위 Component에서 사용할 데이터가 있으면, 이를 state라는 이름으로 관리함
      listData: ["a", "b", "C"],
    };
  }
  render() {
    return (
      // 하위 Component의 props로 자신의 state를 전달함
      <div className="App">
        <List listData={this.state.listData}></List>
      </div>
    );
  }
}

class List extends Component {
  render() {
    const props = this.props.listData;
    const componentTemplate = [];
    props.forEach((alphabet, index) => {
      componentTemplate.push(
        <li key={index} className={"li_" + index}>
          {alphabet}
        </li>
      );
    });
    return <header>{componentTemplate}</header>;
  }
}
