import React, { Component } from 'react';
import './App.css';
import Icon from './Icon.jsx';

class App extends Component {
  state = {
  }

  /*imgs = [
    [0,"fas fa-car-battery"],
    [1,"fas fa-temperature-high"],
    [2,"fas fa-oil-can"],
    [3, "fas fa-gas-pump"],
    [4, "fas fa-snowflake"],
    [5, "fas fa-wrench"],
    [6, "fas fa-info"],
    [7, "fas fa-key"],
    [8, "fas fa-road"]
  ]  */

  icons = [
    //Warning Symbols
    [0, "icons/battery.jpg", "Battery"],
    [1,"icons/high-temp.jpg", "Temperature"],
    [2,"icons/oil-can.jpg", "Oil Pressure"],
    [3, "icons/brake-warn.jpg", "Brake Warning"],

    //Safety Symbols
    [4, "icons/seatbelt.jpg", "Seat belt not on"],
    [5, "icons/hitch.jpg", "Trailer tow hitch"],
    [6, "icons/dampers.jpg", "Suspension dampers"],
    [7, "icons/service.jpg", "Service required"],
    [8, "icons/power-steering.jpg", "Power Steering"],
    [9, "icons/tire-pressure.jpg", "Tire pressure"],
    [10, "icons/abs.jpg", "ABS"],
    [11, "icons/airbag.jpg", "Airbag activated"],
    [12, "icons/airbag-deact.jpg", "Airbag deactivated"],
    [13, "icons/air-suspension.jpg", "Air suspension"],
    [14, "icons/brakelight.jpg", "Brakelight"],
    [15, "icons/brake-pad.jpg", "Brake pads"],
    [16, "icons/clutch.jpg", "Press clutch"],
    [17, "icons/converter.jpg", "Catalytic converter"],
    [18, "icons/parking-brake.jpg", "Parking brake"],
    [19, "icons/gear.jpg", "Automatic gearbox"],
    [20, "icons/emissions.jpg", "Engine/Emissions"],
    [21, "icons/distance.jpg", "Distanve"],
    [22, "icons/fuel-filter.jpg", "Fuel filter"],
    [23, "icons/frost.jpg", "Frost"],
    [24, "icons/steering-lock.jpg", "Steering lock"],
    [25, "icons/stability.jpg", "Stability control"],

    //Common Symbols
    [26, "icons/gas-pump.jpg", "Low fuel"],
    [27, "icons/wrench.jpg", "Service reminder"],
    [28, "icons/info.jpg", "Information indicator"],
    [29, "icons/key.jpg", "Key not in vehicle"],
    [30, "icons/hood.jpg", "Hood open"],
    [31, "icons/trunk.jpg", "Trunk open"],
    [32, "icons/door.jpg", "Door open"],
    [33, "icons/defrost.jpg", "Rear window defrost"],
    [34, "icons/washer.jpg", "Washer fluid low"],

    //Advanced Feature Symbols
    [35, "icons/road.jpg", "Lane departure"],
    [36, "icons/cruise.jpg", "Cruise control on"],
    [37, "icons/auto-wind.jpg", "Auto windscreen wiping"],
    [38, "icons/parking-assist.jpg", "Parking assist"],
    [39, "icons/eco.jpg", "Eco driving indicator"],
    [40, "icons/rain-sensor.jpg", "Rain sensor"],
    [41, "icons/key-fob.jpg", "Key Fob"],
    [42, "icons/spoiler.jpg", "Rear spoiler"],
    [43, "icons/hill.jpg", "Hill descent"],
    [44, "icons/speed-limiter.jpg", "Speed limiter"],
    [45, "icons/key-ignition.jpg", "Ignition switch"]
  ]

  render() {
    return (
      <>
      <head>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"></link>
      </head>
      <Icon images={this.icons} descriptions={this.exp}/>
      </>
    );
  }
}

export default App;
/*
          <script src="https://unpkg.com/react/umd/react.production.js" crossorigin />
          <script src="https://unpkg.com/react-dom/umd/react-dom.production.js" crossorigin/>
          <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin/>
*/
