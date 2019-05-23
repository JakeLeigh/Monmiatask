import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import { HashRouter, Route, Link } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <div>
      <Route path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/passwordreset" component={ForgotPassword} />
    </div>
  </HashRouter>,
  document.querySelector("#root")
);
