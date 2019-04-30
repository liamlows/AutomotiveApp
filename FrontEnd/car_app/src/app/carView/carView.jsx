import React from 'react';
import Car from '../../models/car';
import MaintenanceForm from './maintenanceForm';
import MaintenanceList from './maintenanceList';
import { Link } from 'react-router-dom'
import {CarRepo} from './../../api/carRepo';

export class CarView extends React.Component {
    carRepo = new CarRepo();
    
    state = {
        car: new Car("Mazda","RX-8","2018",200,25000,"icons/mazda.png"),
        records: []
    };

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    onRecordAdded(record){
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
        (this.setState(state => {
            state.records.push(record);
            return state;
        }));
    }

    onDelete(){
        // this.carRepo.deleteCar(this.state.car.id)
        // .then();
    }

    componentDidMount() {
        // let productId = +this.props.match.params.productId;
        // if(productId){
        //     this.productRepository.getProduct(productId)
        //     .then(p => this.setState({product: p}));
        // }
        // console.log(this.state.product.reviews);
    }
    
    render() {
        return (
            <>
                <div className="jumbotron jumbotron" style={{marginTop:'3em'}}>
                    <div className="container">
                        <Link to="/" className="btn btn-danger float-right" onClick={e => this.onDelete()} style={{marginBottom:'.75em'}}>
                            <i className="fa fa-trash"></i>&nbsp;
                        </Link>
                        <div className="row justify-content-start ">
                            <div className="col" >
                                <img src={this.state.car.imgPath} alt="MakerLogo" style={{width:'30vw',height:'100%',minWidth:'100px'}}/>
                            </div>
                            <div className="col">
                                <h1 className="display-4">{this.state.car.MAKE}</h1>
                                <h3 className="display-5" >{this.state.car.MODEL}</h3>
                                <p className="lead" style={{marginBottom:'0.5em'}}>{this.state.car.YEAR}</p>
                                <p className="display-6">{this.numberWithCommas(this.state.car.current_mileage)} miles</p>
                                <p className="display-6">{this.state.car.avg_mileage} miles/day</p>
                                <hr/>
                                <p className="display-6" style={{marginBottom:'1em'}}>Last maintenance at {this.numberWithCommas(this.state.car.milesAtLastMaintenance)} miles </p>
                                <p className="display-6" style={{marginBottom:'1em'}}>Last oil change at {this.numberWithCommas(this.state.car.milesAtLastOilChange)} miles</p>
                                <p className="display-6">Last tire change at {this.numberWithCommas(this.state.car.milesAtLastTireChange)} miles</p>
                            </div>
                            {/* <div className="col" style={{marginTop:'2em'}}> */}
                               
                            {/* </div> */}
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