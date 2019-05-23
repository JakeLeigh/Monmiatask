import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Login from "./components/Login";
import Register from "./components/Register";
import { Router, Route, hashHistory } from "react-router";

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
  </Router>,
  document.querySelector("#root")
);
