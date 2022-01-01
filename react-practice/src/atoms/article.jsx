import { atom } from "recoil";

export const ariticleState = atom({
  key: "article",
  get: async () => {
    const response = await fetch("dummy.json");
    const json = await response.json();
    return json;
  },
});
