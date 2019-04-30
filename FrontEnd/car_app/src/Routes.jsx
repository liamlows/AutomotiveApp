import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./app/loginPage/NotFound";
import HomePage from "./app/home/HomePage";
import AccountInfo from './app/accountInfo/AccountInfo';
import CarView from './app/carView/carView';

export default () =>
    <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/account_info" exact component={AccountInfo} />
        {/* <Route path="/car/:carId" exact component={CarView} /> */}
        <Route path="/car" exact component={CarView} />
        <Route component={NotFound} />
    </Switch>;