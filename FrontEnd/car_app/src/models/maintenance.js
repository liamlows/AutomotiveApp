import { Component } from 'react';

export default class Maintenance extends Component {
    constructor(type, cost, date, miles, description) {
        super();
        this.type = type;
        this.cost = cost;
        this.date_serviced = date;
        this.last_mileage = miles;
        this.description = description;
    }
}