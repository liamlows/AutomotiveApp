import { Component } from 'react';

export default class Car extends Component {
    constructor(make, model, year, avg_mileage, current_mileage, imgPath, id) {
        super();
        this.MAKE = make;
        this.MODEL = model;
        this.YEAR = year;
        this.avg_mileage = avg_mileage;
        this.current_mileage = current_mileage;
        this.imgPath = imgPath;
        this.id=id;
        this.milesAtLastOilChange = 0;
        this.milesAtLastTireChange = 0;
        this.milesAtLastMaintenance = 0;
    }
}