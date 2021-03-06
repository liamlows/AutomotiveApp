import React from 'react';
import CarForm from './CarForm';
import CarList from './CarList';
import "./MyGarage.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {CarRepo} from './../../api/carRepo';
 
library.add(faPlus)

export class MyGarage extends React.Component {
    carRepo = new CarRepo();

    state = {
        cars: [],
        carToBeAdded: false,
        isCar: false,
    };

    async onCarAdded(car){
        var id = localStorage.getItem('uID');
        await this.carRepo.addCar(id, car);
        this.carRepo.getCars(id)
        .then(cars => this.setState({ cars }));
        this.onCarToBeAdded();
        this.setState(state => ({ isCar: true }));
    };

    onCarToBeAdded (){
        this.setState(state => ({ carToBeAdded: !state.carToBeAdded }));
    }

    componentDidMount() {
        var id = localStorage.getItem('uID');
        console.log(id)
        this.carRepo.getCars(id)
        .then(cars => {this.setState({ cars }); console.log(cars); });
    }
    
    render() {
        return (
            <div className="container parent" style={{marginBottom:'0em'}}>
                <div>
                    {
                        this.state.carToBeAdded && <CarForm onCarAdded = {a => this.onCarAdded(a)} />
                    }
                </div>
                <div>
                    {
                        !!this.state.cars && <CarList cars = {this.state.cars} style={{marginTop:'1.5em'}}/>
                    }
                </div>
                {/* <img src="https://image.flaticon.com/icons/svg/16/16909.svg" 
                        alt="" className = "plus align-middle" onClick = {e => this.onCarToBeAdded()} style={{width:'100%',height:'13vh'}}/> */}
                <div className="w-100 text-center" >
                    <button className="btn btn-light border" onClick = {e => this.onCarToBeAdded()} >
                        <i className="fa fa-plus fa-3x mr-3"></i>
                        <i className="fa fa-car fa-3x"></i>
                    </button>
                </div>
                <div className="clearfix"></div>
                <hr/>
            </div>  
        )
    }
}

export default MyGarage;