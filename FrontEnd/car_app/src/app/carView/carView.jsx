import React from 'react';
import Car from '../../models/car';
import MaintenanceForm from './maintenanceForm';
import MaintenanceList from './maintenanceList';
import {CarRepo} from './../../api/carRepo';
import MyNav from '../home/MyNav';
import { Redirect } from 'react-router-dom';

export class CarView extends React.Component {
    carRepo = new CarRepo();
    
    state = {
        car: {},
        // new Car("Ford","RX-8","2018",200,25000,"icons/mazda.png")
        records: [],
        redirect: false
    };

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    onRecordAdded(record){
        let carId = +this.props.match.params.carId;
        // let productId = +this.props.match.params.productId;
        // this.productRepository.addReview(productId, review)
        if(record.type==='General'){
            this.setState(state => {
                state.car['milesAtLastMaintenance'] = record.last_mileage;
                return state;
            });
        } else if (record.type==='Oil change'){
            this.setState(state => {
                state.car['milesAtLastOilChange'] = record.last_mileage;
                return state;
            });
        } else {
            this.setState(state => {
                state.car['milesAtLastTireChange'] = record.last_mileage;
                return state;
            });
        }
        this.carRepo.addRecord(carId, record)
        .then(this.setState(state => {
            state.records.push(record);
            return state;
        }));
    }

    async onDelete(){
        let carId = +this.props.match.params.carId;
        await this.carRepo.deleteCar(carId);
        this.setState({redirect: true})
    }

    componentDidMount() {
        let carId = +this.props.match.params.carId;
        if(carId){
            this.carRepo.getCars(localStorage.getItem('uID'))
            .then(cars => {
                console.log(cars);
                for (var i=0; i < cars.length; i++) {
                    if (cars[i].c_id === carId) {
                        this.setState({car: 
                            new Car(cars[i].MAKE, cars[i].MODEL, cars[i].YEAR, 
                                cars[i].avg_mileage,cars[i].current_mileage)});
                    }
                }
                
            });
        }
        this.carRepo.getRecords(carId)
        .then(records => this.setState({ records }));
    }
    
    render() {
        if(!this.state.car || this.state.car.MAKE === 'undefined' || this.state.car.MAKE === undefined){ 
            return(<div className="alert alert-primary">Loading...</div>
        )}
        if(this.state.redirect){
            return <Redirect to='/home'/>
        }
        return (
            <>
                <MyNav />
                <div className="jumbotron jumbotron" style={{marginTop:'3em'}}>
                    <div className="container">
                        <button className="btn btn-danger float-right" onClick={e => this.onDelete()} style={{marginBottom:'.75em'}}>
                            <i className="fa fa-trash" ></i>&nbsp;
                        </button>
                        <div className="row justify-content-start ">
                            <div className="col" >
                                <img src={`/icons/${this.state.car.MAKE.toLowerCase()}.png`} alt={`icons/${this.state.car.MAKE.toLowerCase()}.png`} style={{width:'30vw',height:'100%',minWidth:'100px'}}/>
                                
                            </div>
                            <div className="col">
                                <h1 className="display-4">{this.state.car.MAKE}</h1>
                                <h3 className="display-5" >{this.state.car.MODEL}</h3>
                                <p className="lead" style={{marginBottom:'0.5em'}}>{this.state.car.YEAR}</p>
                                {
                                    this.state.car.current_mileage !== "undefined" 
                                    ? <p className="display-6">{this.numberWithCommas(this.state.car.current_mileage)} miles</p>
                                    : <div></div>
                                }
                                {
                                    this.state.car.current_mileage !== "undefined" 
                                    ? <p className="display-6">{this.state.car.avg_mileage} miles/day</p>
                                    : <div></div>
                                }
                                <hr/>
                                <p className="display-6" style={{marginBottom:'1em'}}>Last maintenance at {this.numberWithCommas(this.state.car.milesAtLastMaintenance)} miles </p>
                                <p className="display-6" style={{marginBottom:'1em'}}>Last oil change at {this.numberWithCommas(this.state.car.milesAtLastOilChange)} miles</p>
                                <p className="display-6">Last tire change at {this.numberWithCommas(this.state.car.milesAtLastTireChange)} miles</p>
                            </div>
                        </div>
                    </div>
                </div>  

                { 
                    !!this.state.records && <MaintenanceList records={this.state.records}/> 
                }
                <MaintenanceForm onRecordAdded={ a => this.onRecordAdded(a) } />
            </>
        )
    }
}

export default CarView;