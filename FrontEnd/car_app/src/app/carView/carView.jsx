import React from 'react';
import Car from '../../models/car';
import MaintenanceForm from './maintenanceForm';
import MaintenanceList from './maintenanceList';

export class CarView extends React.Component {
    
    state = {
        car: new Car("Mazda","RX-8","2018",200,"icons/mazda.png"),
        records: []
    };

    onRecordAdded(record){
        // let productId = +this.props.match.params.productId;
        // this.productRepository.addReview(productId, review)
        (this.setState(state => {
            state.records.push(record);
            return state;
        }));
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
                        <div className="row justify-content-start ">
                            <div className="col" >
                                <img src={this.state.car.imgPath} alt="MakerLogo" style={{width:'30vw',height:'100%',minWidth:'100px'}}/>
                            </div>
                            <div className="col">
                                <h1 className="display-4">{this.state.car.make}</h1>
                                <h3 className="display-5" >{this.state.car.model}</h3>
                                <p className="lead" style={{marginBottom:'0.5em'}}>{this.state.car.year}</p>
                                <p className="display-6">{this.state.car.avgMilesPerDay} miles/day</p>
                                <hr/>
                                <p className="display-6" style={{marginBottom:'1em'}}>{this.state.car.milesAtLastMatenience} miles since last maintenance</p>
                                <p className="display-6" style={{marginBottom:'1em'}}>{this.state.car.milesAtLastOilChange} miles since last oil change</p>
                                <p className="display-6">{this.state.car.milesAtLastTireChange} miles since last tire change</p>
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