import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import Notifications from "./components/Notifications";
import { HashRouter, Route } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <div>
      <Route path="/" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/passwordreset" component={ForgotPassword} />
      <Route path="/notifications" component={Notifications} />
    </div>
  </HashRouter>,
  document.querySelector("#root")
);
