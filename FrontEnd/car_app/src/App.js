import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import MyNav from "./app/MyNav"
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
    render() {
        return (
          <div className="container">
            <Router>
                <MyNav />
                <Routes />
            </Router>
          </div>
        );
    }
}

export default App;
