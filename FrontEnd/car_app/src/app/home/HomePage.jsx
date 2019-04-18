import React, { Component } from "react";
import MyGarage from "../garage/CarList"
import MapComponent from "../shops/MapComponent";
import IconPage from "../icons/IconPage";

class HomePage extends Component {
  render() {
    return (
      <div className="">
        {/* <MyGarage /> */}
        <MapComponent />
        <IconPage />
      </div>
    );
  }
}

export default HomePage;