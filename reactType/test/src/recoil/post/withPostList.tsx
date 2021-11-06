import { selectorFamily } from "recoil";
import { clickedMenuAtom } from "../header";

export const withPostList = selectorFamily<Array<string>, string>({
  key: "withPostList",
  get:
    (url) =>
    async ({ get }) => {
      const filter = get(clickedMenuAtom);
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const json = await response.json();
      return json[filter];
    },
});
