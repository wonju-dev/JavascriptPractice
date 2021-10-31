import { selectorFamily } from "recoil";
import { clickedMenuAtom } from "../header";

export const withPostList = selectorFamily<Promise<string>>({
  key: "withPostList",
  get: async (get) => {
    const filter = get(clickedMenuAtom);
    const response = await fetch("post.json");
    const json = await response.json();
    return json[filter];
  },
});
