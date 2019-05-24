import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import Notifications from "./components/Notifications";
import Details from "./components/Details";
import PersonalData from "./components/PersonalData";
import FinanceData from "./components/FinanceData";
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
      <Route path="/savedetails" component={Details} />
      <Route path="/personaldata" component={PersonalData} />
      <Route path="/financedata" component={FinanceData} />
    </div>
  </HashRouter>,
  document.querySelector("#root")
);
