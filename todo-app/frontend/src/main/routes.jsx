import React from "react";
import { Route, Switch } from "react-router-dom";

import Todo from "../todo/todo";
import About from "../about/about";

export default props => (
  <main>
    <Switch>
      <Route exact path="/" component={Todo} />
      <Route path="/todos" component={Todo} />
      <Route path="/about" component={About} />
    </Switch>
  </main>
);
