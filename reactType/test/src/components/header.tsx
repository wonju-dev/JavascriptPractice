import React, { MouseEvent, ChangeEvent } from "react";

export const Header: React.FC = () => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log("clicked!");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <>
      <input onChange={handleChange} />
      <button onClick={handleClick}>click!</button>
    </>
  );
};
