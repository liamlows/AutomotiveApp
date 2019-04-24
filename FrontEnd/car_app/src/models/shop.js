import { Component } from 'react';

export default class Shop extends Component {
    constructor(name, address, rating, open_now) {
        super();
        this.name = name;
        this.address = address;
        this.rating = rating;
        this.open_now = open_now
    }
}