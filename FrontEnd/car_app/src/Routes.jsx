import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import SignUp from "./containers/SignUp";
import Main from "./containers/Main";
import Insurance from "./containers/Insurance"
import Icons from "./containers/Icons"
import NotFound from "./containers/NotFound";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={SignUp} />
    {/* <Route path="/main" component={Main} /> */}
    <Route path="/icons" component={Icons} />
    <Route path="/acc_info" component={Insurance} />
    <Route component={NotFound} />
  </Switch>;
