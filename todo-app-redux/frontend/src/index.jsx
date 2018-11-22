import React from "react";
import ReactDOM from "react-dom";
import App from "./main/app";
import { HashRouter } from "react-router-dom";
import reducers from "./main/reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("app")
);
