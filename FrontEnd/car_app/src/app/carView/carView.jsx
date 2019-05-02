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
        generalUrgent: 45000,
        displayGeneralRecom: false,
        generalRecom: 30000,
        displayOilUrgent: false,
        oilChangeUrgent: 90000,
        displayOilRecom: false,
        oilChangeRecom: 6000,
        displayTiresUrgent: false,
        tiresUrgent: 50000,
        displayTiresRecom: false,
        tiresRecom: 25000,
        avg_miles: 0,
        curr_miles: 0
    };

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    async onRecordAdded(record){
        let carId = +this.props.match.params.carId;
        if(record.type==='General' && record.last_mileage > this.state.car.miles_maint){  
            this.setState(state => {
                state.car['miles_maint'] = record.last_mileage;
                state.displayGeneralUrgent = this.state.car.current_mileage - this.state.car.miles_maint > this.state.generalUrgent;
                state.displayGeneralRecom = this.state.car.current_mileage - this.state.car.miles_maint > this.state.generalRecom;
                return state;
            });
            await this.carRepo.updateMilesMaint(carId,{"miles_maint":record.last_mileage});
        } else if (record.type==='Oil change' && record.last_mileage > this.state.car.miles_oil){
            this.setState(state => {
                state.car['miles_oil'] = record.last_mileage;
                state.displayOilUrgent = this.state.car.current_mileage - this.state.car.miles_oil > this.state.oilChangeUrgent;
                state.displayOilRecom = this.state.car.current_mileage - this.state.car.miles_oil > this.state.oilChangeRecom;
                return state;
            });
            await this.carRepo.updateMilesOil(carId,{"miles_oil":record.last_mileage});
        } else if(record.type==='Tire rotation/replacement' && record.last_mileage > this.state.car.miles_tire) {
            this.setState(state => {
                state.car['miles_tire'] = record.last_mileage;
                state.displayTiresUrgent = this.state.car.current_mileage - this.state.car.miles_tire > this.state.tiresUrgent;
                state.displayTiresRecom = this.state.car.current_mileage - this.state.car.miles_tire > this.state.tiresRecom;
                return state;
            });
            await this.carRepo.updateMilesTire(carId,{"miles_tire":record.last_mileage});
        }
        if(record.last_mileage > this.state.car.current_mileage){
            this.carRepo.updateCurrMileage(carId,{"current_mileage":record.last_mileage});
            this.setState(state => {
                state.car.current_mileage = record.last_mileage;
                return state;
            });
        }

        await this.carRepo.addRecord(carId, record)
        .then(this.setState(state => {
            state.records.push(record);
            return state;
        }));

        await this.carRepo.getRecords(carId)
        .then(records => this.setState({ records }));
    }

    async onDelete(){
        if(window.confirm("Are you sure?")) {
            let carId = +this.props.match.params.carId;
            await this.carRepo.deleteRecordsByCID(carId);
            await this.carRepo.deleteCar(carId);
            this.setState({redirect: true})
        }
    }

    async onDeleteMaint(mId){
        if(window.confirm("Are you sure?")) {
            await this.carRepo.deleteRecordByMID(mId);
            let carId = +this.props.match.params.carId;
            await this.carRepo.getRecords(carId)
            .then(records => this.setState({ records }));
        }
    }

    async onEdit(){
        if(this.state.editMode){
            if(this.state.curr_miles !== 0){
                await this.setState(state => {
                    state.car.current_mileage = state.curr_miles;
                })
                
            }
            if(this.state.avg_miles !== 0){
                await this.setState(state => {
                    state.car.avg_mileage = state.avg_miles;
                })
                
            }
            this.setState(state => {
                state.displayGeneralUrgent = state.car.current_mileage - state.car.miles_maint >= state.generalUrgent;
                state.displayGeneralRecom = state.car.current_mileage - state.car.miles_maint >= state.generalRecom;
                state.displayOilUrgent = state.car.current_mileage - state.car.miles_oil >= state.oilChangeUrgent;
                state.displayOilRecom = state.car.current_mileage - state.car.miles_oil >= state.oilChangeRecom;
                state.displayTiresUrgent = state.car.current_mileage - state.car.miles_tire >= state.tiresUrgent;
                state.displayTiresRecom = state.car.current_mileage - state.car.miles_tire >= state.tiresRecom;
                return state;
            });    
            this.updateMileage();
        }
        this.setState(prevState => ({ editMode: !prevState.editMode}));
    }

    async updateMileage(){
        let carId = +this.props.match.params.carId;
        await this.carRepo.updateCurrMileage(carId, {"current_mileage":this.state.car.current_mileage});
        await this.carRepo.updateAvgMileage(carId, {"avg_mileage": this.state.car.avg_mileage});
    }

    async componentDidMount() {
        let carId = +this.props.match.params.carId;
        if(carId){
            await this.carRepo.getCars(localStorage.getItem('uID'))
            .then(cars => {
                console.log(cars);
                for (var i=0; i < cars.length; i++) {
                    if (cars[i].c_id === carId) {
                        let make = cars[i].MAKE;
                        let model = cars[i].MODEL;
                        let year = cars[i].YEAR;
                        let avg_m=  cars[i].avg_mileage;
                        let cur_m = cars[i].current_mileage;
                        let m_maint = cars[i].miles_maint || 0;
                        let m_oil = cars[i].miles_oil || 0;
                        let m_tire = cars[i].miles_tire || 0;
                        this.setState({car: 
                            new Car(make,model,year,avg_m,cur_m,m_maint,m_oil,m_tire)});
                    }
                }
                
            });
        }
        this.carRepo.getRecords(carId)
        .then(records => this.setState({ records }));
        
        this.setState(state => {
            state.displayGeneralUrgent = state.car.current_mileage - state.car.miles_maint >= state.generalUrgent;
            state.displayGeneralRecom = state.car.current_mileage - state.car.miles_maint >= state.generalRecom;
            state.displayOilUrgent = state.car.current_mileage - state.car.miles_oil >= state.oilChangeUrgent;
            state.displayOilRecom = state.car.current_mileage - state.car.miles_oil >= state.oilChangeRecom;
            state.displayTiresUrgent = state.car.current_mileage - state.car.miles_tire >= state.tiresUrgent;
            state.displayTiresRecom = state.car.current_mileage - state.car.miles_tire >= state.tiresRecom;
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
                        {
                            !this.state.editMode ?                         
                            <button className="btn btn-primary float-right" onClick={e => this.onEdit()} style={{marginBottom:'.75em', marginRight:'.5em'}}>
                                <i className="fa fa-edit" ></i>&nbsp;
                            </button>
                            :
                            <button className="btn btn-success float-right" onClick={e => this.onEdit()} style={{marginBottom:'.75em', marginRight:'.5em'}}>
                                <i className="fa fa-save" ></i>&nbsp;
                            </button>
                        }
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


                                <p className="display-6" style={{marginBottom:'1em'}}>Last maintenance at {this.numberWithCommas(this.state.car.miles_maint)} miles
                                {this.state.displayGeneralUrgent
                                    ? <span className="badge badge-danger" style={{marginLeft:'1em'}}>Urgent</span>
                                    :
                                    this.state.displayGeneralRecom
                                    ? <span className="badge badge-warning" style={{marginLeft:'1em'}}>Needed within {parseInt((this.state.generalUrgent - (this.state.car.current_mileage - this.state.car.miles_maint))/this.state.car.avg_mileage)+1} days</span>
                                    : <span className="badge badge-success" style={{marginLeft:'1em'}}><i className="fa fa-check"></i>&nbsp;</span>
                                }
                                 </p>
                                <p className="display-6" style={{marginBottom:'1em'}}>Last oil change at {this.numberWithCommas(this.state.car.miles_oil)} miles
                                {this.state.displayOilUrgent
                                    ? <span className="badge badge-danger" style={{marginLeft:'1em'}}>Urgent</span>
                                    :
                                    this.state.displayOilRecom
                                    ? <span className="badge badge-warning" style={{marginLeft:'1em'}}>Needed within {parseInt((this.state.oilChangeUrgent - (this.state.car.current_mileage - this.state.car.miles_oil))/this.state.car.avg_mileage)+1} days</span>
                                    : <span className="badge badge-success" style={{marginLeft:'1em'}}><i className="fa fa-check"></i>&nbsp;</span>
                                }
                                </p>
                                <p className="display-6">Last tire change at {this.numberWithCommas(this.state.car.miles_tire)} miles
                                {this.state.displayTiresUrgent
                                    ? <span className="badge badge-danger" style={{marginLeft:'1em'}}>Urgent</span>
                                    :
                                    this.state.displayTiresRecom
                                    ?<span className="badge badge-warning" style={{marginLeft:'1em'}}>Needed within {parseInt((this.state.tiresUrgent - (this.state.car.current_mileage - this.state.car.miles_tire))/this.state.car.avg_mileage)+1} days</span>
                                    :<span className="badge badge-success" style={{marginLeft:'1em'}}><i className="fa fa-check"></i>&nbsp;</span>
                                }
                                </p>
                            
                            </div>
                        </div>
                    </div>
                </div>  

                { 
                    !!this.state.records && <MaintenanceList records={this.state.records} onDelete= {x => this.onDeleteMaint(x) }/> 
                }
                <MaintenanceForm onRecordAdded={ a => this.onRecordAdded(a) } />
            </>
        )
    }
}

export default CarView;