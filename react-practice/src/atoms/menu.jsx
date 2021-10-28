import { atom } from "recoil";

export const menuState = atom({
  key: "menu",
  default: ["menu1", "menu2", "menu3"],
});

export const clickedMenu = atom({
  key: "clickedMenu",
  default: undefined,
});
