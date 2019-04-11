import React from 'react';
import Icons from './Icons.jsx';

export class IconPage extends React.Component {
    
  icons = [
    {   
        title: 'Warning Symbols',
        imgs: [
        ["icons/battery.jpg", "Battery"],
        ["icons/high-temp.jpg", "Temperature"],
        ["icons/oil-can.jpg", "Oil Pressure"],
        ["icons/brake-warn.jpg", "Brake Warning"]
        ]
    },

    {
        title: 'Safety Symbols',
        imgs: [
            ["icons/seatbelt.jpg", "Seat belt not on"],
            ["icons/hitch.jpg", "Trailer tow hitch"],
            ["icons/dampers.jpg", "Suspension dampers"],
            ["icons/service.jpg", "Service required"],
            ["icons/power-steering.jpg", "Power Steering"],
            ["icons/tire-pressure.jpg", "Tire pressure"],
            ["icons/abs.jpg", "ABS"],
            ["icons/airbag.jpg", "Airbag activated"],
            ["icons/airbag-deact.jpg", "Airbag deactivated"],
            ["icons/air-suspension.jpg", "Air suspension"],
            ["icons/brakelight.jpg", "Brakelight"],
            ["icons/brake-pad.jpg", "Brake pads"],
            ["icons/clutch.jpg", "Press clutch"],
            ["icons/converter.jpg", "Catalytic converter"],
            ["icons/parking-brake.jpg", "Parking brake"],
            ["icons/gear.jpg", "Automatic gearbox"],
            ["icons/emissions.jpg", "Engine/Emissions"],
            ["icons/distance.jpg", "Distanve"],
            ["icons/fuel-filter.jpg", "Fuel filter"],
            ["icons/frost.jpg", "Frost"],
            ["icons/steering-lock.jpg", "Steering lock"],
            ["icons/stability.jpg", "Stability control"]
        ]
    },

    {
        title: 'Common Symbols',
        imgs: [
            ["icons/gas-pump.jpg", "Low fuel"],
            ["icons/wrench.jpg", "Service reminder"],
            ["icons/info.jpg", "Information indicator"],
            ["icons/key.jpg", "Key not in vehicle"],
            ["icons/hood.jpg", "Hood open"],
            ["icons/trunk.jpg", "Trunk open"],
            ["icons/door.jpg", "Door open"],
            ["icons/defrost.jpg", "Rear window defrost"],
            ["icons/washer.jpg", "Washer fluid low"]
        ]
    },

    {
        title: 'Advanced Feature Symbols',
        imgs: [
            ["icons/road.jpg", "Lane departure"],
            ["icons/cruise.jpg", "Cruise control on"],
            ["icons/auto-wind.jpg", "Auto windscreen wiping"],
            ["icons/parking-assist.jpg", "Parking assist"],
            ["icons/eco.jpg", "Eco driving indicator"],
            ["icons/rain-sensor.jpg", "Rain sensor"],
            ["icons/key-fob.jpg", "Key Fob"],
            ["icons/spoiler.jpg", "Rear spoiler"],
            ["icons/hill.jpg", "Hill descent"],
            ["icons/speed-limiter.jpg", "Speed limiter"],
            ["icons/key-ignition.jpg", "Ignition switch"]
        ]
    }
  ]

  render() {
    return (
      <>
        <Icons images={this.icons} />
      </>
    );
  }
}

export default IconPage;