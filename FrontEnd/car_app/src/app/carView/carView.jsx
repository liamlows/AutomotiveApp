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
        records: [],
        redirect: false,
        displayGeneralUrgent: false,
        generalUrgent: 5000,
        displayGeneralRecom: false,
        generalRecom: 2000,
        displayOilUrgent: false,
        oilChangeUrgent: 3000,
        displayOilRecom: false,
        oilChangeRecom: 2000,
        displayTiresUrgent: false,
        tiresUrgent: 4000,
        displayTiresRecom: false,
        tiresRecom: 2000,
        avg_miles: 0,
        curr_miles: 0
    };

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    async onRecordAdded(record){
        let carId = +this.props.match.params.carId;
        if(record.type==='General'){  
            this.setState(state => {
                state.car['milesAtLastMaintenance'] = record.last_mileage;
                state.displayGeneralUrgent = this.state.car.current_mileage - this.state.car.milesAtLastMaintenance > this.state.generalUrgent;
                state.displayGeneralRecom = this.state.car.current_mileage - this.state.car.milesAtLastMaintenance > this.state.generalRecom;
                return state;
            });
        } else if (record.type==='Oil change'){
            this.setState(state => {
                state.car['milesAtLastOilChange'] = record.last_mileage;
                state.displayOilUrgent = this.state.car.current_mileage - this.state.car.milesAtLastOilChange > this.state.oilChangeUrgent;
                state.displayOilRecom = this.state.car.current_mileage - this.state.car.milesAtLastOilChange > this.state.oilChangeRecom;
                return state;
            });
        } else {
            this.setState(state => {
                state.car['milesAtLastTireChange'] = record.last_mileage;
                state.displayTiresUrgent = this.state.car.current_mileage - this.state.car.milesAtLastTireChange > this.state.tiresUrgent;
                state.displayTiresRecom = this.state.car.current_mileage - this.state.car.milesAtLastTireChange > this.state.tiresRecom;
                return state;
            });
        }
        await this.carRepo.addRecord(carId, record)
        .then(this.setState(state => {
            state.records.push(record);
            return state;
        }));

        if(record.last_mileage > this.state.car.current_mileage){
            this.carRepo.updateCurrMileage(carId,{"current_mileage":record.last_mileage});
            this.setState(state => {
                state.car.current_mileage = record.last_mileage;
                return state;
            });
        }
    }

    async onDelete(){
        if(window.confirm("Are you sure?")) {
            let carId = +this.props.match.params.carId;
            await this.carRepo.deleteRecordsByCID(carId);
            await this.carRepo.deleteCar(carId);
            this.setState({redirect: true})
        }
    }

    async onEdit(){
        if(this.state.editMode){
            this.setState(state => {
                state.car.current_mileage = state.curr_miles;
                state.car.avg_mileage = state.avg_miles;
            })
            let carId = +this.props.match.params.carId;
            // await this.carRepo.updateAvgMileage(carId, this.state.car.avg_mileage);
            // await this.carRepo.UpdateCurrMileage(carId, this.state.car.current_mileage);
        }
        this.setState(prevState => ({ editMode: !prevState.editMode}));
    }

    async componentDidMount() {
        let carId = +this.props.match.params.carId;
        if(carId){
            await this.carRepo.getCars(localStorage.getItem('uID'))
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
        
        this.setState(state => {
            state.displayGeneralUrgent = state.car.current_mileage - state.car.milesAtLastMaintenance > state.generalUrgent;
            state.displayGeneralRecom = state.car.current_mileage - state.car.milesAtLastMaintenance > state.generalRecom;
            state.displayOilUrgent = state.car.current_mileage - state.car.milesAtLastOilChange > state.oilChangeUrgent;
            state.displayOilRecom = state.car.current_mileage - state.car.milesAtLastOilChange > state.oilChangeRecom;
            state.displayTiresUrgent = state.car.current_mileage - state.car.milesAtLastTireChange > state.tiresUrgent;
            state.displayTiresRecom = state.car.current_mileage - state.car.milesAtLastTireChange > state.tiresRecom;
            return state;
        });    
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
                        <button className="btn btn-primary float-right" onClick={e => this.onEdit()} style={{marginBottom:'.75em', marginRight:'.5em'}}>
                           <i className="fa fa-edit" ></i>&nbsp;
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
                                   ? !this.state.editMode
                                   ?<p className="display-6">{this.numberWithCommas(this.state.car.current_mileage)} miles</p>
                                   :
                                   <input className="form-control" type="number" placeholder={this.state.car.current_mileage}
                                //    value={this.state.car.current_mileage}
                                   onChange={e => this.setState({ curr_miles: e.target.value })} 
                                   style={{width:'50%'}}></input>
                                   : <div></div>
                               }
                               {
                                   this.state.car.current_mileage !== "undefined"
                                   ?!this.state.editMode
                                   ? <p className="display-6">{this.state.car.avg_mileage} miles/day</p>
                                   :
                                   <input className="form-control" type="number" placeholder={this.state.car.avg_mileage}
                                //    value={this.state.car.avg_mileage}
                                   onChange={e => this.setState({ avg_miles: e.target.value })}
                                   style={{width:'50%'}}></input>
                                   : <div></div>
                               }
                                <hr/>


                                <p className="display-6" style={{marginBottom:'1em'}}>Last maintenance at {this.numberWithCommas(this.state.car.milesAtLastMaintenance)} miles
                                {this.state.displayGeneralUrgent
                                    ? <span className="badge badge-danger" style={{marginLeft:'1em'}}>Urgent</span>
                                    :
                                    this.state.displayGeneralRecom
                                    ? <span className="badge badge-warning" style={{marginLeft:'1em'}}>Needed in {parseInt((this.state.generalUrgent - (this.state.car.current_mileage - this.state.car.milesAtLastMaintenance))/this.state.car.avg_mileage)} days</span>
                                    : <span className="badge badge-success" style={{marginLeft:'1em'}}><i className="fa fa-check"></i>&nbsp;</span>
                                }
                                 </p>
                                <p className="display-6" style={{marginBottom:'1em'}}>Last oil change at {this.numberWithCommas(this.state.car.milesAtLastOilChange)} miles
                                {this.state.displayOilUrgent
                                    ? <span className="badge badge-danger" style={{marginLeft:'1em'}}>Urgent</span>
                                    :
                                    this.state.displayOilRecom
                                    ? <span className="badge badge-warning" style={{marginLeft:'1em'}}>Needed in {parseInt((this.state.oilChangeUrgent - (this.state.car.current_mileage - this.state.car.milesAtLastOilChange))/this.state.car.avg_mileage)} days</span>
                                    : <span className="badge badge-success" style={{marginLeft:'1em'}}><i className="fa fa-check"></i>&nbsp;</span>
                                }
                                </p>
                                <p className="display-6">Last tire change at {this.numberWithCommas(this.state.car.milesAtLastTireChange)} miles
                                {this.state.displayTiresUrgent
                                    ? <span className="badge badge-danger" style={{marginLeft:'1em'}}>Urgent</span>
                                    :
                                    this.state.displayTiresRecom
                                    ?<span className="badge badge-warning" style={{marginLeft:'1em'}}>Needed in {parseInt((this.state.tiresUrgent - (this.state.car.current_mileage - this.state.car.milesAtLastTireChange))/this.state.car.avg_mileage)} days</span>
                                    :<span className="badge badge-success" style={{marginLeft:'1em'}}><i className="fa fa-check"></i>&nbsp;</span>
                                }
                                </p>
                            
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