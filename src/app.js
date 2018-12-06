import React from "react";
import ReactDom from "react-dom";
import List from "./main";
import { createStore } from "redux";
import rootReducer from "./rootreducer";
import { Provider } from "react-redux";
let myStore = createStore(rootReducer);

ReactDom.render(<Provider store={myStore}><List /></Provider>, document.getElementById("reactcontainer"));