import React, { Component } from "react";
import "./Main.css";
import MyNav from '../components/MyNav';

class Main extends Component {
    render() {
        return (
          <div className="Main">
            <MyNav></MyNav>
          </div>
        );
      }
}

export default Main;
