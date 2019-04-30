import React from 'react';
import Car from './../../models/car'
import { Button, Modal } from "react-bootstrap";

export class CarForm extends React.Component {
    
    state = {
        make: '',
        model: "",
        year: "",
        avg_mileage: '',
        current_mileage:'',
        show: true,
        imgPath: '',
        makes: [
            {make:'Audi',imgPath:'icons/audi.png'},
            {make:'Buick',imgPath:'icons/buick.png'},
            {make:'BMW',imgPath:'icons/bmw.png'},
            {make:'Cadillac',imgPath:'icons/cadillac.png'},
            {make:'Chrysler',imgPath:'icons/chrysler.png'},
            {make:'Fiat',imgPath:'icons/fiat.png'},
            {make:'Ford',imgPath:'icons/ford.png'},
            {make:'Honda',imgPath:'icons/honda.png'},
            {make:'Hyundai',imgPath:'icons/hyundai.png'},
            {make:'Jaguar',imgPath:'icons/jaguar.png'},
            {make:'Kia',imgPath:'icons/kia.png'},
            {make:'Mazda',imgPath:'icons/mazda.png'},
            {make:'Mercedes-Benz',imgPath:'icons/mercedes-benz.png'},
            {make:'Mitsubishi',imgPath:'icons/mitsubishi.png'},
            {make:'Nissan',imgPath:'icons/nissan.png'},
            {make:'Suzuki',imgPath:'icons/suzuki.png'},
            {make:'Toyota',imgPath:'icons/toyota.png'},
            {make:'Volkswagen',imgPath:'icons/volkswagen.png'},
            {make:'Volvo',imgPath:'icons/volvo.png'}
        ]
    }

    onCarAdded(car){
        this.props.onCarAdded(car);
        this.setState({
              show: true
            });
    }
    

    onShow = () => {
        this.setState({
            show: true
          });
          this.onCarAdded(new Car(this.state.make, this.state.model, this.state.year, 
            this.state.avg_mileage,this.state.current_mileage,this.state.imgPath));
        //   {"MAKE":this.state.make,"MODEL":this.state.model,"YEAR":this.state.year}
      }
    
    onClose = () => {
        this.setState({
            show: false
        });
    }

    onChange = e => {
        this.setState({ make: e.target.value});

        var val = e.target.options[e.target.selectedIndex].dataset
        this.setState({imgPath:val.src});
    }

    componentDidMount() {
        // $("#datepicker").datepicker({
        //     format: "yyyy",
        //     viewMode: "years", 
        //     minViewMode: "years"
        // });
    }
    
    render() {
        return(
            <Modal show={this.state.show} onHide={this.onClose}>
            <Modal.Header>
              <Modal.Title>Add Car</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                <div className="form-row" style={{padding:'.5em',margin:'.5em'}}>
                    <div className="form-group col" style={{marginRight:'1.5em'}}>
                        <label htmlFor="make">Make</label>
                        <select type="name" className="form-control" id="make"
                        value={this.state.make}
                        onChange={e => this.onChange(e)}>
                        <option></option>
                            {
                                this.state.makes.map( (a, i) => 
                                    <option key={i} data-src={a.imgPath} value={a.make} >{a.make}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className="form-group col">
                        <label htmlFor="model">Model</label>
                        <input type="name" className="form-control" id="model" placeholder="Model"
                        value={this.state.model}
                        onChange={e => this.setState({ model: e.target.value })}>
                        </input>
                    </div>
                </div>
                <div className="form-row" style={{padding:'.5em',margin:'.5em'}}>
                    <div className="form-group col" style={{marginRight:'1.5em'}}>
                        <label htmlFor="year">Year</label>
                        <input className="form-control col" type="number" id= "year" placeholder="Year"
                        value={this.state.year}
                        onChange={e => this.setState({ year: e.target.value })}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="avg_mileage">Average Weekly Mileage</label>
                        <input className="form-control col" type="number" id="avg_mileage" placeholder="Avg Mileage" 
                        value={this.state.avg_mileage}
                        onChange={e => this.setState({ avg_mileage: e.target.value })}>
                        </input>
                    </div>
                </div>
                <div className="form-row" style={{padding:'.5em',margin:'.5em'}}>
                    <div className="form-group col">
                        <label htmlFor="model">Current Miles</label>
                        <input type="number" className="form-control" id="current_mileage" placeholder="Current Miles"
                        value={this.state.current_mileage}
                        onChange={e => this.setState({ current_mileage: e.target.value })}>
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