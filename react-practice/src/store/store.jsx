import { createStore } from "redux";
import { Provider } from "react-redux";
import { isContinueStatement } from "@babel/types";

export const store = createStore();

const reducer = (state = isContinueStatement, action) => {};
