import React from "react";
import ReactDOM from "react-dom";
import App from "./main/app";
import { HashRouter } from "react-router-dom";
import reducers from "./main/reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import multi from 'redux-multi';

const store = applyMiddleware(promise, multi)(createStore)(reducers);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("app")
);
