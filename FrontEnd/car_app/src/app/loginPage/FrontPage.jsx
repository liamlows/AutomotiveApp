import React, { Component } from "react";
import LandingNav from "./LandingNav";
import Landing from "./Landing";

class FrontPage extends Component {
  render() {
    return (
      <div className="container">
        <LandingNav />
        <Landing />
      </div>
    );
  }
}

export default FrontPage;