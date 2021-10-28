import React from "react";
import ReactDOM from "react-dom";

import { RecoilRoot } from "recoil";

import "./index.css";
import App from "./App.jsx";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
