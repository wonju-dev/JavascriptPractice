/* import { atom } from "recoil";

export const menuState = atom({
  key: "menu",
  get: async () => {
    const response = await fetch("dummy.json");
    const json = await response.json();
    return Object.keys(json);
  },
});

export const clickedMenu = atom({
  key: "clickedMenu",
  default: undefined,
});
 */

import { atom, selector } from "recoil";

export const menuState = atom({
  key: "menuState",
  default: "",
});

export const getArticles = selector({
  key: "getArticles",
  get: async (get) => {
    console.log(get);
  },
});
