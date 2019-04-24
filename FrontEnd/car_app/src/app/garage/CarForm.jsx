import React from 'react';
import Car from './../../models/car'
import { Button, Modal } from "react-bootstrap";

export class CarForm extends React.Component {
    
    state = {
        make: "",
        model: "",
        year: "",
        mileage: 0,
        show: true
    }

    onCarAdded(car){
        this.carMake.value = '';
        this.mod.value = '';
        this.carYear.value = '';
        this.mile.value = 0;
        this.props.onCarAdded(car);
        this.setState(
            {
              show: true
            });
    }
    

    onShow = () => {
        //alert("hello");
        this.setState(
          {
            show: true
          });
          this.onCarAdded(new Car(this.state.make, this.state.model, this.state.year, this.state.mileage));
      }
    
    onClose = () => {
        this.setState({
            show: false
        });
    }

    componentDidMount(){

    }
    
    render() {
        return(
            <Modal show={this.state.show} onHide={this.onClose}>
            <Modal.Header>
              <Modal.Title>Add Car</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="make">Make</label>
                        <input type="name" className="form-control" id="make" placeholder="Make" ref={input => this.carMake = input}
                        onChange={e => this.setState({ make: e.target.value })}>
                        </input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="model">Model</label>
                        <input type="name" className="form-control" id="model" placeholder="Model" ref={input => this.mod = input}
                        onChange={e => this.setState({ model: e.target.value })}>
                        </input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="year">Year</label>
                        <input type="name" className="form-control" id="year" placeholder="Year" ref={input => this.carYear = input}
                        onChange={e => this.setState({ year: e.target.value })}>
                        </input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="userName">Mileage</label>
                        <input className="form-control" id="mileage" placeholder="Mileage" ref={input => this.mile = input}
                        onChange={e => this.setState({ mileage: e.target.value })}>
                        </input>
                    </div>
                </div>
            </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.onClose}>
                Close
              </Button>
              <Button variant="primary" type="button"
                onClick = {this.onShow}>
                Submit
            </Button>
            </Modal.Footer>
          </Modal>
       )
    }
}

export default CarForm;