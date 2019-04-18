import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InsuranceForm from './InsuranceForm';
import './Insurance.css'

export class InsuranceInfo extends React.Component { 



    render(){
        return(
            <div>
                <Navbar  expand="lg" variant="dark" className="Navbar">
                            <Navbar.Brand className="text-white" style={{text:"10em"}}><img src="http://i64.tinypic.com/30vnqf5.jpg" style={{height:"3em"}}/></Navbar.Brand>
                            <Nav className="flex-row ml-md-auto d-none d-md-flex">
                                <Nav.Link href="#garage" className="text-white">My Garage</Nav.Link>
                                <Nav.Link href="#shop" className="text-white">My Shops</Nav.Link>
                                <Nav.Link href="#Icon" className="text-white">Icons</Nav.Link>
                                <Nav.Link href="#account" className="text-white">Account Information</Nav.Link>
                                <Nav.Link href="#logout" className="text-white">Logout</Nav.Link>
                            </Nav>
                </Navbar>
            
                <h1 className="d-inline" >Insurance Information</h1>
                <button className="btn btn-success float-right " style={{margin:"0.5em"}} >Edit</button>
                <div style={{margin:"3em"}}>
                    {this.props.insurances.map((a,i) => 
                        <>
                            <p ><h5 className="d-inline">Your Email:</h5>{a.email}</p>
                            <p ><h5 className="d-inline">Company Name:</h5> {a.companyName}</p>
                            <p ><h5 className="d-inline">Policy Number:</h5> {a.policyNumber}</p>
                            
                            <div className="jumbotron">
                                <h5 className="display-4">Policy</h5>

                            </div>
                        </>
                        )}
                </div>
              
            
                    
            </div>
     )
    }
};

export default InsuranceInfo;
