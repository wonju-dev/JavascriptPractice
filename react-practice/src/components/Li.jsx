import React from "react";

import CancleButton from "./CancleButton";

export default function Li({ ekey, value, handleClick }) {
  function handleDeleteElement() {
    console.log("delete");
  }

  return (
    <>
      <li key={ekey} onClick={handleClick}>
        {value}
      </li>
      <CancleButton handleDeleteElement={handleDeleteElement} />
    </>
  );
}
