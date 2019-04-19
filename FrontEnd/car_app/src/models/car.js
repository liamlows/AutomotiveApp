import { Component } from 'react';

export default class Car extends Component {
    constructor(make, model, year, mileage) {
        super();
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
        this.milesAtLastOilChange = 0;
        this.milesAtLastTireChange = 0;
        this.milesAtLastMatenience = 0;
        this.avgMilesPerDay = 0;
    }
}