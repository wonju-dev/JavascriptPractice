import React, { useState } from "react";

export default function App() {
  const [state, setState] = useState({ counter: 5, action: undefined });

  const decreaseCounter = () => {
    console.log(state);
    setState((prev) => {
      return { counter: prev.counter - 1 };
    }); // state가 counter : 4, action : undefined가 아닌, 그냥 4로 변함
  };

  return (
    <>
      <button onClick={decreaseCounter}>decreaseCounter!</button>
      <div>{state.counter}</div>
    </>
  );
}
