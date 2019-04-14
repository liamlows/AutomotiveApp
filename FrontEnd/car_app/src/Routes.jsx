import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./app/loginPage/Home";
import Login from "./app/loginPage/Login";
import SignUp from "./app/loginPage/SignUp";
import Insurance from "./app/accountInfo/Insurance";
import MyGarage from "./app/garage/MyGarage";
import Icons from "./app/icons/Icons";
import NotFound from "./app/loginPage/NotFound";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/garage" exact component={MyGarage} />
    <Route path="/icons" component={Icons} />
    <Route path="/acc_info" component={Insurance} />
    <Route component={NotFound} />
  </Switch>;