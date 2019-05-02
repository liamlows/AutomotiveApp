import { Component } from 'react';

export default class Car extends Component {
    constructor(make, model, year, avg_mileage, current_mileage,miles_maint=0, miles_oil=0, miles_tire=0,id,imgPath) {
        super();
        this.MAKE = make;
        this.MODEL = model;
        this.YEAR = year;
        this.avg_mileage = avg_mileage;
        this.current_mileage = current_mileage;
        this.imgPath = imgPath;
        this.id=id;
        this.miles_maint = miles_maint;
        this.miles_oil = miles_oil;
        this.miles_tire = miles_tire;

    }
}