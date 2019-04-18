import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Insurance } from './Insurance'
import './Insurance.css'
export class InsuranceForm extends React.Component {

    state = {
        email: '',
        company: '',
        policy_num: ''
    }

    onSubmit () {
        this.props.onNewInsurance(new Insurance(this.state.email, this.state.company, this.state.policy_num))
        this.setState({
            email: '',
            company: '',
            policy_num : ''
        })

    }

    render(){
        return (
            <>
                <Navbar className="Navbar" expand="lg" variant="dark" >
                    <Navbar.Brand className="text-white" style={{text:"10em"}}><img src="http://i64.tinypic.com/30vnqf5.jpg" style={{margin:"0em"}} className="d-inline-block align-top"/></Navbar.Brand>
                    <Nav className="flex-row ml-md-auto d-none d-md-flex">
                        <DropdownButton className="dropdown" id="dropdown-basic-button" title="My Garage">
                            <Dropdown.Item href="#/action-1">My Garage</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">My Shops</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Icons</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Insurance</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                        </DropdownButton>
                    </Nav>
                </Navbar>

                <h1 style={{margin:"0.5em"}}>Insurance Policy Form</h1>

                <form style={{margin:"2em"}} >
                    <div className="form-group ">
                        <label for="email"><FontAwesomeIcon icon="envelope" size="lg"/> Email address</label>
                        <input className="d-block form-control" id="email" type="email" placeholder="Enter email" style={{maxWidth:"40%"}} value={this.state.email} onChange={e => this.setState({email:e.target.value})}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </div>
                    <br></br>
                    <div className="form-group ">
                        <label for="company"><FontAwesomeIcon icon="building" size="lg" /> Insurance Company</label>
                        <input className="d-block form-control" id="company" type="text" placeholder="Enter Company Name" style={{maxWidth:"40%"}} value={this.state.company} onChange={e => this.setState({company:e.target.value})}/>
                    </div>
                    <br></br>
                    <div className="form-group ">
                        <label for="policy"><FontAwesomeIcon icon="key" size="lg" /> Policy Number</label>
                        <input className="d-block form-control" id="policy" type="text" placeholder="Enter Insurance number" style={{maxWidth:"40%"}} value={this.state.policy_num} onChange={e => this.setState({policy_num:e.target.value})}/>    
                    </div>  
                </form>
                <button className="btn btn-primary" type="submit" onClick={e => this.onSubmit()} style={{margin:"2em"}}>
                        Submit
                    </button>

            </>
        )
    }
}
export default InsuranceForm;