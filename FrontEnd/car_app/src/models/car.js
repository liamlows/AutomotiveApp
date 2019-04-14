import { Component } from 'react';

export default class Car extends Component {
    constructor(make, model, year) {
        super();
        this.make = make;
        this.model = model;
        this.year = year;
    }
}