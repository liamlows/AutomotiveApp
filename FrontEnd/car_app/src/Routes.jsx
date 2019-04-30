import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./app/loginPage/NotFound";
import HomePage from "./app/home/HomePage";
import FrontPage from "./app/loginPage/FrontPage";
import AccountInfo from './app/accountInfo/AccountInfo';
import Login from './app/loginPage/Login';

export default () =>
    <Switch>
        <Route path="/" exact component={FrontPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/account_info" exact component={AccountInfo} />
        {/* route for specific car info */}

        {/* <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/garage" exact component={MyGarage} />
        <Route path="/icons" component={Icons} />
        <Route path="/acc_info" component={Insurance} /> */}
        <Route component={NotFound} />
    </Switch>;