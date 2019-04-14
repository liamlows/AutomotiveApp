import React, { Component } from 'react';
import CarList from './CarList';
import NewCar from './NewCar';

class MyGarage extends Component {

    state = {
        cars: [
        ]
    }

    onAddCar(car)  {
        this.setState(state => {
            state.cars.push(car);
            return state;
        });
    }

    render() {
        return (
            <body className="container">
                { !this.state.cars.length &&  
                <div id="alert" 
                    className="alert alert-secondary" role="alert" style={{margin:"1em"}}>
                    It looks like you don't have any cars in your garage yet... Add one by clicking the button below!
                </div> }
                <CarList cars={ this.state.cars }/>
                <NewCar onNewReview={ a => this.onAddCar(a) }></NewCar>
            </body>
        );
    }
}

export default MyGarage;