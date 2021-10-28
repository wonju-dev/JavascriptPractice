import React from "react";

import Menu from "./components/menu";
import Article from "./components/article";

import { menuState as menuAtom } from "./atoms/menu";
import { useRecoilState } from "recoil";

export default function App() {
  const [menu, setMenu] = useRecoilState(menuAtom);

  return (
    <>
      <p> number of menu is {menu.length}</p>
      <Menu />
      <Article />
    </>
  );
}
