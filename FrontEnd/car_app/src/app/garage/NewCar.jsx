import React, { Component } from 'react';
import Car from '../../Models/car.js';
import { Button, Modal  } from "react-bootstrap";

class NewCar extends Component {

    state = {
        show: false,
        make: '',
        model: '',
        year: ''
    }
    
    handleClose() {
        this.setState(state => {
            state.show=false;
            return state;
        });
    }

    onClick = () => {
        this.handleClose();
        this.onSubmit();
    }

    handleShow = () => {
        this.setState(state => {
            state.show=true;
            return state;
        });
    }

    onSubmit(){
        this.props.onNewReview(new Car(this.state.make, this.state.model, this.state.year))
        this.setState(state => {
            state.make='';
            state.model = '';
            state.year = '';
            return state;
        });
    }

    render() {
        return (
            <div>
                <button variant="primary" className="btn btn-primary" onClick={e => this.handleShow()}>
                    Add New Car
                </button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header>
                        <Modal.Title>Add New Car</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className = "form-group">
                                <label htmlFor="name">Make </label>
                                <input type="text" 
                                    id="make" 
                                    name="make" 
                                    className="form-control"
                                    value={this.state.make}
                                    onChange={ e => this.setState({ make: e.target.value }) }/>
                            </div>
                            <div className = "form-group">
                                <label htmlFor="name">Model </label>
                                <input type="text" 
                                    id="model" 
                                    name="model" 
                                    className="form-control"
                                    value={this.state.model}
                                    onChange={ e => this.setState({ model: e.target.value }) }/>
                            </div>
                            <div className = "form-group">
                                <label htmlFor="name">Year </label>
                                <input type="text" 
                                    id="year" 
                                    name="year" 
                                    className="form-control"
                                    value={this.state.year}
                                    onChange={ e => this.setState({ year: e.target.value }) }/>
                            </div>
                        </form>

                    </Modal.Body>
                
                    <Modal.Footer>
                        <Button variant="secondary" onClick={e => this.handleClose()}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={e => this.onClick()}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default NewCar;