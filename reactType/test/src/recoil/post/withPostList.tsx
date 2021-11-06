import { selectorFamily } from "recoil";
import { clickedMenuAtom } from "../header";

export const withPostList = selectorFamily<Promise<string>, string>({
  key: "withPostList",
  get:
    (url) =>
    async ({ get }) => {
      const filter = get(clickedMenuAtom);
      const response = await fetch(url);
      const json = await response.json();
      return json[filter];
    },
});
