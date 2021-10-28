import React from "react";
import { useState, useRef } from "react";
import { useRecoilState } from "recoil";
import { menuState as menuAtom } from "../atoms/menu";
import { clickedMenu as clickedMenuAtom } from "../atoms/menu";

export default function Menu() {
  const [menu, setMenu] = useRecoilState(menuAtom);
  const [clickedMenu, setClickedMenu] = useRecoilState(clickedMenuAtom);
  const [newMenu, setNewMenu] = useState("");
  const input = useRef();
  const ul = useRef();

  const menuList = menu.map((value, index) => <li key={index}>{value}</li>);

  function clearInput() {
    input.current.value = "";
    setNewMenu("");
  }

  function handleChange(event) {
    setNewMenu(event.target.value);
  }

  function handleClick() {
    setMenu([...menu, newMenu]);
    clearInput();
  }

  function colorClickedMenu(eventTarget) {
    const children = Array.from(ul.current.children);
    children.forEach((child) => (child.style.backgroundColor = "transparent"));
    eventTarget.style.backgroundColor = "red";
  }

  function updateClickedMenu(event) {
    if (event.target.tagName !== "LI") return;
    setClickedMenu(event.target.innerHTML);
    colorClickedMenu(event.target);
  }

  return (
    <>
      <div>
        <input ref={input} onChange={handleChange} />
        <button onClick={handleClick}>add new Menu </button>
      </div>
      <ul ref={ul} onClick={updateClickedMenu}>
        {menuList}
      </ul>
    </>
  );
}
