import React, { MouseEvent } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { clickedMenuAtom, withMenuList } from "../recoil/header";
import { withPostList } from "../recoil/post";

interface menuData {
  name: string;
  description: string;
}

export const Menu: React.FC = () => {
  const setClickedMenu = useSetRecoilState(clickedMenuAtom);
  const menuList = useRecoilValue(withMenuList);
  const menuElement = menuList.map((menu: menuData, index: number) => <li key={index}>{menu.name}</li>);

  const handleClick = (event: MouseEvent): void => {
    const target = event.target as HTMLElement;
    if (target.tagName !== "LI") return;
    setClickedMenu(target.innerText);
  };

  return <ul onClick={handleClick}>{menuElement}</ul>;
};
