import React, { Suspense } from "react";

import { Menu } from "./components/Menu";
import { Post } from "./components/Post";

export const App: React.FC = () => {
  return (
    <Suspense fallback={<div>loading....</div>}>
      <Menu />
      <Post />
    </Suspense>
  );
};
