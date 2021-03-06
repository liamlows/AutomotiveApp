import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import Routes from "./Routes";


class App extends Component {
    render() {
        return (
          <div className="container">
            <Router>
                <Routes />
            </Router>
          </div>
        );
    }
}

export default App;
