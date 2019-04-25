import React from 'react';
import Car from '../../models/car';

export class CarView extends React.Component {
    
    state = {
        // car: {
        //     make:"Mazda",
        //     model:"RX-8",
        //     year:'2018',
        //     mileage: 200,
        //     imgPath:"icons/mazda.jpg"
        // }
        car: new Car("Mazda","RX-8","2018",200,"icons/mazda.jpg")
    };

    
    render() {
        return (
            <div className="jumbotron jumbotron-fluid" style={{marginTop:'3em'}}>
                <div className="container">
                    <div className="d-flex flex-row justify-content-start align-content-start">
                        <div className="p-2" style={{marginRight:'4em', marginLeft:'2em'}}>
                            <img src={this.state.car.imgPath} alt="MakerLogo" style={{width:'20vw',height:'100%'}}/>
                        </div>
                        <div className="p-2 " style={{width:'23vw'}}>
                            <h1 className="display-4">{this.state.car.make}</h1>
                            <h3 className="display-5" >{this.state.car.model}</h3>
                            <p className="lead">{this.state.car.year}</p>
                        </div>
                        <div className="" style={{marginTop:'2em'}}>
                            <h3>Miles since last...</h3>
                            <h4 className="display-6">Maintenance: {this.state.car.milesAtLastMatenience}</h4>
                            <h4 className="display-6">Oil Change: {this.state.car.milesAtLastOilChange}</h4>
                            <h4 className="display-6">Tire Change: {this.state.car.milesAtLastTireChange}</h4>
                            <hr className="my-4" />
                            <h4 className="display-6">Average Miles/Day: {this.state.car.avgMilesPerDay}</h4>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}

export default CarView;