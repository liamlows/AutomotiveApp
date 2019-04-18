import React from 'react';
import {Car} from '../models/car'
import { Button, Form, Modal, Carousel, Image } from "react-bootstrap";
import CarForm from './carForm';
import CarList from './carList';
import "./MyGarage.css";


export class MyGarage extends React.Component {
    
    state = {
        cars: [],
        carToBeAdded: false,
        isCar: false
    };

    onCarAdded(car){
        this.setState(state => {state.cars.push(car)});
        this.onCarToBeAdded();
        this.setState(state => ({ isCar: true }));
    };

    onCarToBeAdded = () => {
        this.setState(state => ({ carToBeAdded: !state.carToBeAdded }));
    }
    
    render() {
        return (
            <div>
                
                <div className = "float-left">
                {this.state.carToBeAdded && <CarForm onCarAdded = {a => this.onCarAdded(a)}/>}
                </div>
               
                {this.state.isCar && !this.state.carToBeAdded && <CarList cars = {this.state.cars}/>}
             
                <div className = "float-left">
                {!this.state.carToBeAdded && <img src="https://image.flaticon.com/icons/svg/16/16909.svg" alt="" className = "plus"
                onClick = {this.onCarToBeAdded}/>}
                </div>
            </div>  
            
            
            
           
        )
    }
}

export default MyGarage;