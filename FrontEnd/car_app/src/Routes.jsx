import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./app/loginPage/NotFound";
import HomePage from "./app/home/HomePage";
import FrontPage from "./app/loginPage/FrontPage";
import AccountInfo from './app/accountInfo/AccountInfo';
import Login from './app/loginPage/Login';
import CarView from './app/carView/carView';
import ChangePassword from "./app/accountInfo/ChangePassword";
import ReturnLogin from "./app/accountInfo/ReturnLogin";

export default () =>
    <Switch>
        <Route path="/" exact component={FrontPage} />
        <Route path="/login" exact component={Login} /> 
        <Route path='/home' exact component = {HomePage} />
        <Route path="/account_info" exact component={AccountInfo} />
        <Route path="/car/:carId" exact component={CarView} />
        <Route path="/password/:id" exact component={ChangePassword} />
        <Route path="/password/success/:id" exact component={ReturnLogin}/>
        {/* <Route path="/car" exact component={CarView} /> */}
        <Route component={NotFound} />
    </Switch>;