import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export class Insurance extends React.Component {
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

                <Form style={{margin:"1.5em"}}>
                    <Form.Group controlId="insurance-email" >
                        <Form.Label><FontAwesomeIcon icon="envelope" size="sm"/> Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" style={{maxWidth:"40%"}}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="insurance-company">
                        <Form.Label><FontAwesomeIcon icon="building" size="sm" /> Insurance Company</Form.Label>
                        <Form.Control type="company" placeholder="Enter Company Name" style={{maxWidth:"40%"}}/>
                    </Form.Group>
                    <Form.Group controlId="insurance-policy">
                        <Form.Label><FontAwesomeIcon icon="key" size="sm" /> Policy Number</Form.Label>
                        <Form.Control type="policy" placeholder="Enter Insurance number" style={{maxWidth:"40%"}}/>    
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </>
        )
    }
}
export default Insurance;
