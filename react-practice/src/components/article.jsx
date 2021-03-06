import React from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { ariticleState as ariticleAtom } from "../atoms/article";
import { clickedMenu as clickedMenuAtom } from "../atoms/menu";

export default function Article() {
  const [article, setArticle] = useRecoilState(ariticleAtom);
  const [clickedMenu, setClickedMenu] = useRecoilState(clickedMenuAtom);
  const [newArticle, setNewArticle] = useState("");

  function handleChange(event) {
    setNewArticle(event.target.value);
  }

  function handleClick() {
    if (!clickedMenu) return;
    const tmp = {};
    if (article[clickedMenu]) {
      // not undefined
      tmp[clickedMenu] = article[clickedMenu].push(newArticle);
    } else {
      tmp[clickedMenu] = [newArticle];
    }
    console.log(Object.assign(article, tmp));
    setArticle(Object.assign(article, tmp));
  }

  return (
      <ul>{article}</ul>
      <input onChange={handleChange} />
      <button onClick={handleClick}>add new Article</button>
  );
}
