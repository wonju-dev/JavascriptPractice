import React from "react";
import ReactDOM from "react-dom";

import { store } from "./store/store";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
