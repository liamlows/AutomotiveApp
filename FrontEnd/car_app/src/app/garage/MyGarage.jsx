import React from 'react';
import CarForm from './CarForm';
import CarList from './CarList';
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
            <div className="container parent">
                <div className = "float-left">
                    {this.state.carToBeAdded && <CarForm onCarAdded = {a => this.onCarAdded(a)}/>}
                </div>
               <div className="row align-items-center">
                {this.state.isCar && !this.state.carToBeAdded && <CarList cars = {this.state.cars} style={{marginTop:'1.5em'}}/>}

                    <div className="col">
                        {!this.state.cars.length && <div className="alert alert-info">It looks like you don't have any cars in your garage yet... Add one by clicking the plus button!</div>}
                    </div>
                    <div>
                        {!this.state.carToBeAdded && <img src="https://image.flaticon.com/icons/svg/16/16909.svg" 
                        alt="" className = "plus align-middle" onClick = {this.onCarToBeAdded} style={{marginTop:'3em'}}/>}
                    </div>
                </div>
                <div className="clearfix"></div>
                <hr/>
            </div>  
        )
    }
}

export default MyGarage;