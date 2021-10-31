import { selector } from "recoil";

interface menuData {
  name: string;
  description: string;
}

export const withMenuList = selector({
  key: "withMenuList",
  get: async (): Promise<Array<menuData>> => {
    const response = await fetch("menu.json");
    const menuList = await response.json();
    return menuList;
  },
});
