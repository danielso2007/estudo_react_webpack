import React from "react";
import ReactDOM from "react-dom";
import App from "./main/app";
import { HashRouter } from "react-router-dom";
import reducers from './main/reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducers);

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
        <App />
    </Provider>
  </HashRouter>,
  document.getElementById("app")
);
