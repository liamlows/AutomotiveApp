import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Insurance } from './Insurance.js'
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
                <Navbar bg="primary" expand="lg" variant="dark" >
                    <Navbar.Brand className="text-white" style={{text:"10em"}}><FontAwesomeIcon icon="car" />Automotive</Navbar.Brand>
                    <Nav className="flex-row ml-md-auto d-none d-md-flex">
                        <Nav.Link href="#garage" className="text-white">My Garage</Nav.Link>
                        <Nav.Link href="#shop" className="text-white">My Shops</Nav.Link>
                        <Nav.Link href="#Icon" className="text-white">Icons</Nav.Link>
                        <Nav.Link href="#account" className="text-white">Account Information</Nav.Link>
                        <Nav.Link href="#logout" className="text-white">Logout</Nav.Link>
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
