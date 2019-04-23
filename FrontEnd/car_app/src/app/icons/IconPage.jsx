import React from 'react';
import Icons from './Icons.jsx';

export class IconPage extends React.Component {
    
  icons = [
    {   
        title: 'Warning Symbols',
        imgs: [
        ["icons/battery.jpg", "Battery", "Problem with vehicle battery"],
        ["icons/high-temp.jpg", "Temperature", "Temperature is too high"],
        ["icons/oil-can.jpg", "Oil Pressure", "Pressure is too low"],
        ["icons/brake-warn.jpg", "Brake Warning", "Problem with vehicle brakes"]
        ]
    },

    {
        title: 'Safety Symbols',
        imgs: [
            ["icons/seatbelt.jpg", "Belt", "Seat belt is not on"],
            ["icons/hitch.jpg", "Hitch", "Problem with trailer tow hitch"],
            ["icons/dampers.jpg", "Dampers", "Problem with suspension system"],
            ["icons/service.jpg", "Service required", "Get vehicle checked"],
            ["icons/power-steering.jpg", "Steering", "Power steering fluid low"],
            ["icons/tire-pressure.jpg", "Tires", "Tire pressure is low"],
            ["icons/abs.jpg", "ABS", "Problem with Anti-lock Brake System"],
            ["icons/airbag.jpg", "Airbag", "Airbag is activated"],
            ["icons/airbag-deact.jpg", "Airbag", "Airbag is deactivated"],
            ["icons/air-suspension.jpg", "Suspension", "Air suspension problem detected"],
            ["icons/brakelight.jpg", "Brakelight", "Problem with vehicle breaklights"],
            ["icons/brake-pad.jpg", "Brakes", "Brake pads are too thin"],
            ["icons/clutch.jpg", "Clutch", "Press clutch must be pressed before engine can be started"],
            ["icons/converter.jpg", "Converter", "Catalytic converter is overheating or not operating correctly"],
            ["icons/parking-brake.jpg", "Parking", "Release parking brake before driving"],
            ["icons/gear.jpg", "Gearbox", "Sensors giving abnormal readings, check automatic transmission"],
            ["icons/emissions.jpg", "Engine/Emissions", "Malfuction with emissions, ignition, fuel, and/or exhaust system"],
            ["icons/distance.jpg", "Distance", "Object detected in the road ahead"],
            ["icons/fuel-filter.jpg", "Filter", "Empty the fuel filter, too much water has accumulated"],
            ["icons/frost.jpg", "Frost", "Potential frost on the road"],
            ["icons/steering-lock.jpg", "Steering lock", "Turns on when ignition is off and lock is engaged"],
            ["icons/stability.jpg", "Stability control", "Turns on when a loss of steering control or traction is detected"]
        ]
    },

    {
        title: 'Common Symbols',
        imgs: [
            ["icons/gas-pump.jpg", "Fuel", "Vehicle fuel is low"],
            ["icons/wrench.jpg", "Service reminder", "Vehicle needs service soon"],
            ["icons/info.jpg", "Information indicator", "A new message is stored in the information display"],
            ["icons/key.jpg", "Key", "Key not in vehicle"],
            ["icons/hood.jpg", "Hood", "Close the vehicle's hood"],
            ["icons/trunk.jpg", "Trunk", "Close the vehicle's trunk"],
            ["icons/door.jpg", "Door", "One or more doors are open"],
            ["icons/defrost.jpg", "Defrost", "Rear window defrost is on"],
            ["icons/washer.jpg", "Washer", "Washer fluid is low"]
        ]
    },

    {
        title: 'Advanced Feature Symbols',
        imgs: [
            ["icons/road.jpg", "Lane", "Departure from lane without a turn signal"],
            ["icons/cruise.jpg", "Cruise", "Cruise control is in use"],
            ["icons/auto-wind.jpg", "Windshield", "Automatic windshield wiping"],
            ["icons/parking-assist.jpg", "Parking", "Parking assist is engaged"],
            ["icons/eco.jpg", "Eco", "Eco mode is engaged to lower fuel use"],
            ["icons/rain-sensor.jpg", "Rain", "Rain detected, turn on headlights"],
            ["icons/key-fob.jpg", "Key", "Key fob battery is low"],
            ["icons/spoiler.jpg", "Spoiler", "Rear spoiler malfuction detected"],
            ["icons/hill.jpg", "Hill", "Hill descent assist is engaged"],
            ["icons/speed-limiter.jpg", "Speed", "Speed has been set and limiter is active"],
            ["icons/key-ignition.jpg", "Ignition", "Problem with the ignition switch, check key"]
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