import React, { Component } from "react";
import MyGarage from "../garage/MyGarage"
import MapComponent from "../shops/MapComponent";
import IconPage from "../icons/IconPage";
import MyNav from "../home/MyNav";

class HomePage extends Component {
  render() {
    return (
      <div className="">
        <MyNav />
        <MyGarage />
        <MapComponent />
        <IconPage />
      </div>
    );
  }
}

export default HomePage;