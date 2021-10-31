import React from "react";
import { useRecoilValue } from "recoil";
import { withPostList } from "../recoil/post";

export const Post = () => {
  const postList = useRecoilValue(withPostList);
  return <ul></ul>;
};
