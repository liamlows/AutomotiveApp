import { Component } from 'react';

export default class Maintenance extends Component {
    constructor(type, cost, date, miles, description) {
        super();
        this.type = type;
        this.cost = cost;
        this.date = date;
        this.miles = miles;
        this.description = description;
    }
}