import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { withPostList } from "../recoil/post";

export const Post = () => {
  const postList = useRecoilValue(withPostList("post.json"));
  const postListElement = postList.map((value, index) => <li key={index}>{value}</li>);
  return <ul>{postListElement}</ul>;
};
