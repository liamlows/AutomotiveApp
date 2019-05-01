import React, { Component } from 'react';
import Maintenance from './../../models/maintenance';

export default class MaintenanceForm extends Component {
    state = {
        type: "",
        date: "",
        cost: "",
        miles: "",
        description: ""
    }

  onSubmit(){
    this.props.onRecordAdded(new Maintenance(this.state.type, this.state.cost, this.state.date, this.state.miles, this.state.description));
    this.setState(state => {
        state.type="";
        state.date="";
        state.cost = "";
        state.miles="";
        state.description="";
        return state;
    });
  }

  render() {
    return (
      <div className="card" style={{marginBottom:'2em', marginTop:'2em'}}>
        <div id="header" className="card-header"><h5>Add Maintenance Record</h5></div>
        <div className="card-body">
        <form className="needs-validation" action="" id="form">
        <div className="row">
            <div className="col">
                <div className = "form-group">
                    <label htmlFor="type">Type</label>
                    <select
                        id="type" 
                        name="type" 
                        className="form-control"
                        value= { this.state.type }
                        onChange={ e => this.setState({ type: e.target.value }) } required>
                        <option value="" hidden></option>
                        <option value="General">General</option>
                        <option value="Oil change">Oil change</option>
                        <option value="Tire rotation/replacement">Tire rotation/replacement</option>
                    </select>
                </div> 
            </div>
            <div className="col">
                <div className = "form-group">
                    <label htmlFor="date">Date Serviced</label>
                    <input type="date" 
                            id="date" 
                            name="date" 
                            className="form-control"
                            value={this.state.date}
                            onChange={ e => this.setState({ date: e.target.value }) } required/>
                </div>
            </div>
        </div> 
        <div className="row">
            <div className="col">
                <div className = "form-group">
                    <label htmlFor="cost">Cost</label>
                    <input type="number" min="1" step="any"
                            id="cost" 
                            name="cost" 
                            className="form-control"
                            value={this.state.cost}
                            onChange={ e => this.setState({ cost: e.target.value }) } required/>
                </div>
            </div>
            <div className="col">
                <div className = "form-group">
                    <label htmlFor="miles">Miles at Service</label>
                    <input type="number"
                            id="miles" 
                            name="miles" 
                            className="form-control"
                            value={this.state.miles}
                            onChange={ e => this.setState({ miles: e.target.value }) } required/>
                </div>
            </div>
        </div>
        <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea 
                id="description" 
                className="form-control" rows="5" 
                value={ this.state.description }
                onChange={ e => this.setState({ description: e.target.value }) }></textarea>
        </div>  
        </form>
        <button type="submit" className="btn btn-primary" onClick={ e => this.onSubmit() }>Submit</button>
        </div>
      </div>
    );
  }
}